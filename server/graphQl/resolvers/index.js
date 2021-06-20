const Article = require("../../models/articles");
const User = require("../../models/users");
const Event = require("../../models/event");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
  createUser: async (args) => {
    try {
      const { userName, password, email, homeTown } = args.user;
      const hashPassword = await User.findOne({ email }).then((user) => {
        if (user) {
          throw new Error("User exists already.");
        }

        return bcrypt
          .hash(password, 12)
          .then((hash) => {
            console.log(`\nhashPassword`, hash);
            return hash;
          })
          .catch((err) => {
            console.log(`\nerror: `, err);
            throw err;
          });
      });

      const user = await new User({
        userName,
        password: hashPassword,
        email,
        homeTown,
      });

      console.log(`\nuser: `, user);
      const newUser = user.save();

      console.log(`\nnewUser: `, newUser);
      return { ...newUser._doc, _id: newUser.id };
    } catch (error) {
      throw error;
    }
  },
  articles: async () => {
    try {
      const articlesFetched = await Article.find();
      return articlesFetched.map((article) => {
        return {
          ...article._doc,
          _id: article.id,
          createdAt: new Date(article._doc.createdAt).toISOString(),
        };
      });
    } catch (error) {
      throw error;
    }
  },

  createArticle: async (args) => {
    try {
      const { title, body } = args.article;
      const article = new Article({
        title,
        body,
      });
      const newArticle = await article.save();
      return { ...newArticle._doc, _id: newArticle.id };
    } catch (error) {
      throw error;
    }
  },
  events: () => {
    return Event.find()
      .then((events) => {
        return events.map((event) => {
          return { ...event._doc };
        });
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  },
  createEvent: async (args) => {
    try {
      const { userName } = args.event;
      const event = new Event({
        userName,
        creator: "43534tdfgdgrt",
      });

      let createdEvent;
      const newEvent = await event
        .save()
        .then((result) => {
          createdEvent = { ...result._doc, _id: result._doc._id.toString() };
          return User.findById("43534tdfgdgrt");
        })
        .then((user) => {
          if (!user) {
            throw new Error("User does not exist.");
          }
          user.createdEvents.push(event);
          return user.save();
        })
        .then((result) => {
          return createdEvent;
        })
        .catch((err) => {
          throw err;
        });

      return { ...newEvent._doc, _id: newEvent.id };
    } catch (error) {
      throw error;
    }
  },
  login: async ({ email, password }) => {
    try {
      console.log(`password, email`, { password, email });
      const user = await User.findOne({ email: email });
      checkData(!user);
      const isEqual = await bcrypt.compare(password, user.password);
      checkData(!isEqual);

      const token = jwt.sign(
        { userId: user.id, email: user.email },
        "secretKey",
        { expiresIn: "1h" }
      );

      return { userId: user.id, token: token, tokenExpiration: 1 };
    } catch (error) {
      throw error;
    }
  },
};

/* validate */
function checkData(data) {
  if (!data) throw Error("missing data");
}
