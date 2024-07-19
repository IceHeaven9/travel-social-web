import { Link, useParams } from "react-router-dom";
import { PageTitle } from "../components/page-title.jsx";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "../components/loading-spinner.jsx";
import { ReactionButtons } from "../components/reaction-buttons.jsx";
import { TravelImageCarousel } from "../components/travel-detail/travel-image-carousel.jsx";
import { CommentsButton } from "../components/comments-button.jsx";
import { ButtonSection } from "../components/button-section.jsx";
import { TabList } from "../components/tab-list.jsx";
import { TravelDetailComments } from "../components/travel-detail/travel-detail-comments.jsx";
import { Button } from "../components/button.jsx";
import { Icon } from "../components/icon.jsx";
import { useCurrentUser } from "../hooks/current-user.js";
import { useSafeApiCall } from "../hooks/safe-api-call.js";

export function TravelDetailPage() {
  const { travelId } = useParams();
  const [travel, setTravel] = useState(null);
  const [travelImages, setTravelImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCommentInputFocused, setIsCommentInputFocused] = useState(false);
  const [selectedTab, setSelectedTab] = useState("comments");

  const apiCall = useSafeApiCall();

  async function getTravel() {
    const result = await apiCall("get", `/travels/${travelId}`);
    setTravel(result);
    await getTravelImages();
    setIsLoading(false);
  }

  async function getTravelImages() {
    try {
      const result = await apiCall("get", `/travels/${travelId}/photos`);
      setTravelImages(result);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getTravel();
  }, [travelId]);

  const currentUser = useCurrentUser();

  if (isLoading) {
    return (
      <main>
        <LoadingSpinner />
      </main>
    );
  }

  const isTravelOwner = currentUser?.id === travel.user.id;

  return (
    <main>
      <PageTitle>{travel.title}</PageTitle>
      <TravelImageCarousel images={travelImages} />
      <p>{travel.description}</p>
      <ButtonSection>
        <ReactionButtons travel={travel} />
        <CommentsButton
          travel={travel}
          onClick={() => {
            setSelectedTab("comments");
            setIsCommentInputFocused(true);
          }}
        />
        {isTravelOwner && (
          <Link to={`/travels/${travel.id}/edit`}>
            <Button className={"warning"}>
              <Icon name="edit" />
            </Button>
          </Link>
        )}
      </ButtonSection>
      <TabList
        selected={selectedTab}
        options={[
          {
            label: "Comentarios",
            key: "comments",
            content: (
              <TravelDetailComments
                travel={travel}
                inputAutoFocus={isCommentInputFocused}
                setInputAutoFocus={setIsCommentInputFocused}
              />
            ),
          },
          {
            label: "Reacciones",
            key: "reactions",
            content: "Hola desde Reacciones",
          },
          {
            label: "Acompañantes",
            key: "companions",
            content: "Hola desde Acompañantes",
          },
        ]}
        onChange={(key) => setSelectedTab(key)}
      />
    </main>
  );
}
