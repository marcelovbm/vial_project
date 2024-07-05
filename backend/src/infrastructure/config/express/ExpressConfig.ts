import helmet from 'helmet';
import express from 'express';
import cors from 'cors';
import SubjectAPI from '../../api/SubjectAPI';

export default class ExpressConfig {

    private app: express.Application;
    private port = process.env.PORT || 3000;

    constructor() {
        this.app = express();
        this.config();
    }

    public config(): void {
        this.app.disable('x-powered-by');
        this.app.use(helmet());
        this.app.use(express.json());
        this.app.use(cors())
        this.app.use("/subject", new SubjectAPI().router);
    }

    public start(): void {
        this.app.listen(this.port, () => {
            console.log(`[server]: Server is running at http://localhost:${this.port}`);
          });
    }
}