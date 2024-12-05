import UserClass from "./UserClass";
import { UserFunction } from "./UserFuction";

export const About = () => {
  return (
    <div>
      <h1> This is About Page</h1>
      <UserClass name={"ziyad"} />
      {/* {<UserFunction name={"ziyad"} />} */}
      
    </div>
  );
};
