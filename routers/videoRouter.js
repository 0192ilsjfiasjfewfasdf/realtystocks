import express from "express";
import routes from "../routes";
import { editVideo, videos, upload, videoDetail, deleteVideo } from "../controllers/videoController";
const videoRouter = express.Router();

export default videoRouter;

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.uploadVideo, upload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

