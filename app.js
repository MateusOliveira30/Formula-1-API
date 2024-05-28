import express from 'express';
import driversRouter from './routes/driver.js';
import teamsRouter from './routes/team.js';

const baseRoute = '/api/v1';

const  app = express();


app.use(express.json());
app.use(baseRoute + '/drivers', driversRouter);
app.use(baseRoute + '/teams', teamsRouter);



const port = 3000;
app.listen(port);