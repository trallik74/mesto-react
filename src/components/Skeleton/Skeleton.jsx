import './Skeleton.css'
export default function Skeleton({ element }) {
  if (element === "avatar") {
    return <div className="profile__avatar profile__avatar_type_skeleton skeleton-animation" />;
  } else if (element === "title") {
    return <div className="profile__title profile__title_type_skeleton skeleton-animation" />;
  } else if (element === "subtitle") {
    return (
      <div className="profile__subtitle profile__subtitle_type_skeleton skeleton-animation" />
    );
  } else if (element === "cards") {
    return (
      <>
        <div className="element element_type_skeleton skeleton-animation" />
        <div className="element element_type_skeleton skeleton-animation" />
        <div className="element element_type_skeleton skeleton-animation" />
        <div className="element element_type_skeleton skeleton-animation" />
        <div className="element element_type_skeleton skeleton-animation" />
        <div className="element element_type_skeleton skeleton-animation" />
        <div className="element element_type_skeleton skeleton-animation" />
        <div className="element element_type_skeleton skeleton-animation" />
        <div className="element element_type_skeleton skeleton-animation" />
      </>
    );
  }
  return;
}
