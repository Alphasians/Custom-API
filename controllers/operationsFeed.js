exports.getFeed = async (req, res) => {
	const { createClient } = require("@astrajs/collections");
	const astraClient = await createClient({
		astraDatabaseId: process.env.ASTRA_DB_ID,
		astraDatabaseRegion: process.env.ASTRA_DB_REGION,
		applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
	});

	const postsCollection = astraClient.namespace("feed").collection("Collection");

	const posts = await postsCollection.find({});
	return res.json(posts);
};

exports.createFeed = async (req, res) => {
	const { createClient } = require("@astrajs/collections");
	const astraClient = await createClient({
		astraDatabaseId: process.env.ASTRA_DB_ID,
		astraDatabaseRegion: process.env.ASTRA_DB_REGION,
		applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
	});

	const postsCollection = astraClient.namespace("feed").collection("Collection");

	const createPost = await postsCollection.create({
		"username": req.body.username,
		"postImg": req.body.postImg,
		"caption": req.body.caption,
		"points": req.body.points,
	});

	return res.json({data: createPost, msg: 'Post made successfully'})
};


exports.updateFeed = async (req, res) => {
		const { createClient } = require("@astrajs/collections");
		const astraClient = await createClient({
			astraDatabaseId: process.env.ASTRA_DB_ID,
			astraDatabaseRegion: process.env.ASTRA_DB_REGION,
			applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
		});
	
		const postsCollection = astraClient.namespace("feed").collection("Collection");
	
		const createPost = await postsCollection.update(req.body.Id,{
			"username": req.body.username,
			"postImg": req.body.postImg,
			"caption": req.body.caption,
			"points": req.body.points,
		});
	
		return res.json({data: createPost, msg: 'Put made successfully'})
	};

exports.deleteFeed = async (req, res) => {
	const { createClient } = require("@astrajs/collections");
	const astraClient = await createClient({
		astraDatabaseId: process.env.ASTRA_DB_ID,
		astraDatabaseRegion: process.env.ASTRA_DB_REGION,
		applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
	});
	const postsCollection = astraClient.namespace("feed").collection("Collection");
	const deletePost = await postsCollection.delete(req.body.documentId);

	return res.json({data: deletePost, msg: 'user updated successfully'})
};
