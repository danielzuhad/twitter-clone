import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const friends = await prisma.user.findMany({
      where: {
        id: {
          in: user.friends,
        },
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        occupation: true,
        location: true,
        picturePath: true,
      },
    });

    res.status(200).json(friends);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params;

    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    const friend = await prisma.user.findUnique({
      where: {
        id: friendId,
      },
    });

    if (!user || !friend) {
      return res.status(404).json({ message: "User or friend not found" });
    }

    if (user.friends.includes(friendId)) {
      await prisma.user.update({
        where: { id: id },
        data: {
          friends: {
            set: user.friends.filter((f) => f !== friendId),
          },
        },
      });

      await prisma.user.update({
        where: { id: friendId },
        data: {
          friends: {
            set: friend.friends.filter((f) => f !== id),
          },
        },
      });
    } else {
      await prisma.user.update({
        where: { id: id },
        data: {
          friends: {
            set: [...user.friends, friendId],
          },
        },
      });

      await prisma.user.update({
        where: { id: friendId },
        data: {
          friends: {
            set: [...friend.friends, id],
          },
        },
      });
    }

    const updatedUser = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    res.status(200).json(updatedUser.friends);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
