import React from 'react';
import './App.css';
import {
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Link,
  Typography,
} from '@mui/material';

function App() {
  return (
    <Container style={{marginTop: '64px'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                JSON
              </Typography>
              <Typography variant="body2" color="text.secondary">
                JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。
                易于人阅读和编写。同时也易于机器解析和生成。
              </Typography>
            </CardContent>
            <CardActions>
              <Link href={'/json'}>JSON</Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                URL
              </Typography>
              <Typography variant="body2" color="text.secondary">
                URL(Uniform Resource Locator)
                统一资源定位符，俗称网页地址，简称网址，是因特网上标准的资源的地址（Address），如同在网络上的门牌。
              </Typography>
            </CardContent>
            <CardActions>
              <Link href={'/url'}>URL</Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Markdown
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Markdown 是一种轻量级标记语言，它允许人们使用易读易写的纯文本格式编写文档。
              </Typography>
            </CardContent>
            <CardActions>
              <Link href={'/markdown'}>Markdown</Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
