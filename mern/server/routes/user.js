import express from "express";

import { decodeToken } from "./auth.js";

const router = express.Router();

// test token decoding
// using command line: curl localhost:5050/user/get-current-user -H "Authorization: Bearer token-value" - get token-value by going to inspect element in browser -> storage -> cookies
router.get("/get-current-user", decodeToken, async (req, res) => {
    res.status(200).send({
        decodeToken
    });
});

export default router;