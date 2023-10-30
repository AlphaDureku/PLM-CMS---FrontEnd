type Props = {
  name: string;
  role: string;
};

export default function UserProfile(props: Props) {
  return (
    <>
      <div className="UserProfile_Container">
        <div>
          <div>
            <img
              src="/images/UserProfileIcon.png"
              alt="img not found"
              className="UserProfileImage"
            />
          </div>
        </div>
        <div>
          <span>{props.name}</span>
          <br />
          <span>{props.role}</span>
        </div>
      </div>
    </>
  );
}
