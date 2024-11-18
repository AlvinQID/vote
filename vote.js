// Fungsi untuk mengirim vote
async function sendVote(username) {
    const host = "doracraft.alvinq.my.id"; // Ganti dengan IP server Anda
    const port = 8192; // Port NuVotifier
    const token = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAz7L6oIthcn5VnnuZ9OZt+91gAiKpqw4YzzQEewOP2DH2uZ174LsLuf1AypVu8DJNcX47zjxGfCuyXM7PUGwuauK3JyJ240tK/HW9uq0oNFjbYJY+BaHazbNDhXy5nlgS5oRGGfDED2vTpIg3TRUSiDVhCDKeRlxV7nz6rvjfF3Ze4zQjKFHAtgQ5Z6oTr+z85Isim/83ifK5s2i6MkbjtmEmX0sahQ1fzAcRU0sLBg7+IEBN416tr/qVo4SUe64NhL5hsKcyvKRLK1w4xCT0DMyhRHij9pjdV6cKLMVgxrQtj1GLiHuYprpOn1c3pbCQtl10LhwoDCYhLiCe/dp8awIDAQAB"; // Token NuVotifier

    // Data vote yang akan dikirim
    const voteData = {
        serviceName: "AlvinQID-Vote", // Nama situs Anda
        username: username,      // Alamat IP (opsional)
        timestamp: Math.floor(Date.now() / 1000) // Waktu dalam UNIX timestamp
    };

    try {
        // Kirim data ke server NuVotifier menggunakan fetch
        const response = await fetch(`http://${host}:${port}`, {
            method: "POST",
            headers: {
                "Authorization": token, // Kirim token sebagai header
                "Content-Type": "application/json"
            },
            body: JSON.stringify(voteData)
        });

        // Tampilkan hasil respons
        if (response.ok) {
            console.log("Vote berhasil dikirim!");
        } else {
            console.error("Gagal mengirim vote:", response.statusText);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

// Contoh penggunaan fungsi
document.getElementById("submitVote").addEventListener("click", function () {
    const username = document.getElementById("username").value;
    if (username) {
        sendVote(username);
    } else {
        alert("Masukkan username terlebih dahulu!");
    }
});
