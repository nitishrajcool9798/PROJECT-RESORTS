const fs = require('fs');
const path = require('path');
const https = require('https');

const driveIds = [
    "1DbN3t8B30MvuO90vKnDKDWamuBgbLeIf",
    "1bfAJ7DmgJj9ipdmItrNrTeAnDapDbovY",
    "1JxaKcpztUnZx84uteOll9isCSxGGkWJC",
    "1A3Q-ZoFrMuwhk1Krnrj24CNkqMfx0uyk",
    "1G-N-o7Jo6pfLWVDs21AdpOJKc7M7zLxu",
    "1-UX1Q-xGQuyRabbaD73mlBgPmkVimwdz",
    "1ikqIktxyhdW1-g1dbfSSGJAE1vJdFm62",
    "1r4YTZxRPKjXevXyydXcr-Cq3ms5hUnp8",
    "1PaR_6RJ67YdNdxpjN3k-5TLJrSjFcLc8",
    "1uZ-nP02fW3RPz1Cpp90TneA7hnHtu9Tc",
    "1T8naK5QxM6HbWHAuuIo2fRClHe69JA2z",
    "1YcKoGbPRH-ps_bzXYhwFtAZ3vSSaRcny",
    "1XSKfGfDhnTrrSH_h7XStwXuklXb03j4n",
    "1VnjcXvNEDuqZmBnt_fDZF5XNluBC-jZ7",
    "1FOuA29crHEOMDxb-Rrf-xMhyFNMhE3Sk",
    "1tVg1wa9hgN9K13rKbZwBJwALk3W20L9l",
    "11iJIISFPQTias1_ZQUdhVpqdfdMVa_I6",
    "1u1_U47iAQvxCz6LXikk4Yb-BNfmDrkL1",
    "1H5qQW46aL4qtbpqmh3XUMWogsgvjOwfV",
    "1-kLrhVIYRBTWtUTyNc5DH8scOAzVFnmY",
    "1jvaqH-w_EZdTmdb3E23EsNNkL_H-2NYP",
    "1ZMfVtbOnDFVbdmSyJBtlPXzX-DyNA0Vg",
    "1opFvCJpXPa2tE8OmkUX0YgaTWlYyljyo",
    "1gGd4OU3j_vyEs6SfBw6aUgze--NqjZFZ",
    "1QIqpCAZ22QusmobZtI1n2oUvl3Gsw6hO",
    "1L7T5DTg9VmDMul5WX6ZnUBp9WzHqYfn8"
];

const outputDir = path.join(__dirname, 'client', 'public', 'images');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const downloadImage = (id, index) => {
    return new Promise((resolve, reject) => {
        const url = `https://drive.google.com/uc?export=view&id=${id}`;
        const dest = path.join(outputDir, `drive_${index + 1}.jpg`);
        const file = fs.createWriteStream(dest);

        https.get(url, (response) => {
            // Check for redirect (3xx)
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                // Follow 1 redirect level
                https.get(response.headers.location, (redirectResponse) => {
                    redirectResponse.pipe(file);
                    file.on('finish', () => {
                        file.close(() => resolve(dest));
                    });
                }).on('error', (err) => {
                    fs.unlink(dest, () => { });
                    console.error(`Error downloading redirect for ID ${id}: ${err.message}`);
                    resolve(null); // Resolve null to continue
                });
                return;
            }

            response.pipe(file);
            file.on('finish', () => {
                file.close(() => resolve(dest));
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => { });
            console.error(`Error downloading ID ${id}: ${err.message}`);
            resolve(null);
        });
    });
};

async function downloadAll() {
    console.log('Starting download...');
    for (let i = 0; i < driveIds.length; i++) {
        await downloadImage(driveIds[i], i);
        console.log(`Downloaded image ${i + 1}/${driveIds.length}`);
    }
    console.log('All downloads complete.');
}

downloadAll();
