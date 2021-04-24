import {
  CalendarToday,
  CalendarViewDay,
  Create,
  EventNoteTwoTone,
  Image,
  Subscriptions,
} from "@material-ui/icons";
import React from "react";
import InputOption from "../inputOption";
import {
  FeedContainer,
  FeedInputContainer,
  FeedInput,
  FeedInputOptions,
} from "./styles";

function Feed() {
  return (
    <FeedContainer>
      <FeedInputContainer>
        <FeedInput>
          {/* createIcon */}
          <Create />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </FeedInput>
        <FeedInputOptions>
          <InputOption Icon={Image} title="Photo" color="#70B5F9" />
          <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteTwoTone} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write Article"
            color="#7FC15E"
          />
        </FeedInputOptions>
      </FeedInputContainer>
    </FeedContainer>
  );
}

export default Feed;
