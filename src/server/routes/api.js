import express from 'express';
import cors from 'cors';
import assetTypes from '../data/asset-types.json';
import assets from '../data/assets.json';

export const router = express.Router();

router.get('/asset/types', cors(), (req, res) => { res.send(assetTypes); });
router.get('/assets', cors(), (req, res) => { res.send(assets); });

router.get('/nav', cors(), (req, res) => {
    res.send([
        {
            "href": "/",
            "text": "Home"
        },
        {
            "href": "/demo",
            "text": "Demo"
        },
        {
            "href": "/assets",
            "text": "Assets"
        },
        {
            "href": "/asset-types",
            "text": "Asset Types"
        }

    ]);
});

router.get('/people', cors(), (req, res) => {
    res.send([
        "Jared",
        "Sara",
        "Elijah",
        "Xander",
        "Maxwell",
        "Amelia",
        "Ivy",
        "Jennie",
        "Stephanie",
        "Hillary",
        "Cameron",
        "Carey",
        "Ashlee",
        "Alyssa",
        "Tom",
        "Lynn",
        "Ross",
        "Danette",
        "Claigh",
        "Wendy"
    ]);
});



export default router;
