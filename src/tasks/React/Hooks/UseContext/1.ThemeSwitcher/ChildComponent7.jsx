/* eslint-disable react/prop-types */
export const ChildComponent7 = ({ user }) => {
  return (
    <div>
      <p>
        {user.firstName} {user.lastName} from {user.city}
      </p>
    </div>
  );
};
