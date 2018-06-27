const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

//front단의 정적파일 제공을 위해 추가
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
