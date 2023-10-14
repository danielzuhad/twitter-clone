import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Get Post By Id
export const getPostByUserId = async (req, res) => {
  try {
    const { id } = req.body;

    const post = await prisma.post.findMany({
      where: {
        userId: id,
      },

      include: {
        user: true,
      },
    });

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Post WIth Comment
export const getPostWithComments = async (req, res) => {
  try {
    const { postId } = req.body;

    const post = await prisma.post.findUnique({
      where: { id: postId },

      include: {
        comments: {
          include: {
            user: true,
          },
        },
      },
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Feed Post
export const feedPost = async (req, res) => {
  try {
    const { id } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      return res.status(400).json("No User Exists");
    }

    const feedPosts = await prisma.post.findMany({
      where: {
        userId: { in: user.friends },
      },

      include: {
        user: true,
      },
    });

    res.status(200).json(feedPosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Make Post
export const makePost = async (req, res) => {
  try {
    const { description, picturePath, id } = req.body;

    const post = await prisma.post.create({
      data: {
        userId: id,
        description,
        picturePath,
      },

      include: {
        user: true,
      },
    });

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Make Comment Post
export const postComment = async (req, res) => {
  try {
    const { userComment, postId, userId } = req.body;

    const comment = await prisma.comment.create({
      data: {
        postId,
        userId,
        userComment,
      },

      include: { user: true },
    });

    const post = await prisma.post.findUnique({
      where: { id: postId },
      include: { comments: { include: { user: true } } },
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    console.log(userComment);
    console.log(postId);
    console.log(userId);

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add Remove Like Post
export const toggleLike = async (req, res) => {
  try {
    const { postId, userId } = req.body;

    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    let updatedLikes = { ...post.likes };

    if (updatedLikes[userId]) {
      delete updatedLikes[userId];
    } else {
      updatedLikes[userId] = true;
    }

    const updatedPost = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        likes: updatedLikes,
      },
    });

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export const toggleLike = async (req, res) => {
//   try {
//     const { postId, userId } = req.params;

//     const post = await prisma.post.findUnique({
//       where: {
//         id: postId,
//       },
//     });

//     if (!post) {
//       return res.status(404).json({ message: "Post not found" });
//     }

//     const hasLiked = post.likes && post.likes[userId];

//     const updatedLikes = {
//       ...post.likes,
//       [userId]: !hasLiked,
//     };

//     const updatedPost = await prisma.post.update({
//       where: {
//         id: postId,
//       },

//       data: {
//         likes: updatedLikes,
//       },
//     });

//     res.status(200).json(updatedPost);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
