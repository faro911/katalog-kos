/**
 * GITHUB SERVICE
 * Membaca dan memperbarui file di repo GitHub secara langsung via GitHub REST API.
 */

// Konversi UTF-8 string ke Base64 (Aman untuk karakter aksen / emoji)
export function utf8ToBase64(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => {
    return String.fromCharCode('0x' + p1);
  }));
}

// Konversi Base64 ke UTF-8 string
export function base64ToUtf8(str) {
  const cleanStr = str.replace(/\n/g, '');
  return decodeURIComponent(atob(cleanStr).split('').map((c) => {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

/**
 * Uji koneksi ke GitHub Repository dengan Personal Access Token
 */
export async function testGitHubConnection(token, owner = 'faro911', repo = 'katalog-kos') {
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
    });

    if (!res.ok) {
      const err = await res.json();
      return { success: false, message: err.message || 'Gagal terhubung ke repository' };
    }

    const data = await res.json();
    return { 
      success: true, 
      repoName: data.full_name,
      permissions: data.permissions 
    };
  } catch (error) {
    return { success: false, message: error.message };
  }
}

/**
 * Mengambil isi file dan SHA terkini dari GitHub
 */
export async function getFileFromGitHub(token, owner = 'faro911', repo = 'katalog-kos', filePath = 'src/data/kostData.js') {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github.v3+json',
    },
    cache: 'no-cache',
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || `Gagal mengambil file ${filePath}`);
  }

  const data = await res.json();
  const rawText = base64ToUtf8(data.content);

  return {
    content: rawText,
    sha: data.sha,
  };
}

/**
 * Mengirim commit & push file baru ke branch main di GitHub
 */
export async function commitFileToGitHub(token, owner = 'faro911', repo = 'katalog-kos', filePath = 'src/data/kostData.js', newContent, commitMessage, sha) {
  const base64Content = utf8ToBase64(newContent);

  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: commitMessage || 'feat: update katalog kos via AI Assistant',
      content: base64Content,
      sha: sha,
      branch: 'main',
    }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message || 'Gagal menyimpan perubahan ke GitHub');
  }

  const result = await res.json();
  return {
    success: true,
    commitSha: result.commit.sha,
    commitUrl: result.commit.html_url,
  };
}
