import { ExtractJwt, Strategy } from "passport-jwt";
import passport from "passport";
import "dotenv/config";

const opt = {
  secretOrKey: process.env.AUTH0_HS256_KEY,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  issuer: `${process.env.AUTH_ISSUER_URL}`,
  algorithms: ["HS256"],
};

export const jwtStrategy = new Strategy(opt, (jwt_payload, done) => {
  if (!jwt_payload) {
    done(true);
  } else {
    done(null, jwt_payload);
  }
});

export const authMiddleware = (req, res, next) => {
  passport.authenticate(jwtStrategy, (err, user) => {
    console.log(user);
    if (err) res.status(401).send('Unauthorized\nYou must need a token');
    if (!user) res.status(401).send('Unauthorized\nYou must need a token');
    else {
      next();
    }
  })(req, res, next);
};