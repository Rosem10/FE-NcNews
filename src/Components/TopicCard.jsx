import React from "react";
import { Link } from "@reach/router";

function TopicCard(props) {
  const { topic } = props;
  return (
    <li key={topic.slug} className="topicCard">
      <Link to={`/topics/${topic.slug}`} id="topic">
        {topic.slug}
      </Link>
    </li>
  );
}

export default TopicCard;
