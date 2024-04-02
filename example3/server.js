const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/download', (req, res) => {
    const file = path.join(__dirname, 'dummy_large_file.zip');
    const filename = 'dummy_large_file.zip';

    res.setHeader('Content-disposition', `attachment; filename=${filename}`);
    res.setHeader('Content-type', 'application/zip');

    const filestream = fs.createReadStream(file);
    filestream.pipe(res);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
