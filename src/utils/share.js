export function shareFB(
  type = 1,
  data = {
    hashtag: "",
    linkShare: "",
    metaAuthor: "",
    metaTitle: "",
    metaDescription: "",
    metaThumbnail: "",
  },
  callback
) {
  switch (type) {
    case 1:
      //link Share
      const metaUrlRedirectType1 = window.location.origin + "/share.php";
      let metaUrlType1 = window.location.origin + "/create-frame";

      FB.ui(
        {
          display: "popup",
          method: "share",
          hashtag: data.hashtag,
          href:
            metaUrlRedirectType1 +
            "?image=" +
            data.metaThumbnail +
            encodeURIComponent("&url=") +
            encodeURIComponent(metaUrlType1) +
            encodeURIComponent("&desc=") +
            encodeURIComponent(`${data.metaDescription}`),
        },
        function (response) {
          console.log("Vào type1", response);
        }
      );
      break;
    case 2:
      //share Graph
      const metaUrlRedirect = window.location.origin + "/share.php";
      let metaUrl;
      if (getParamsCustomer() !== null) {
        metaUrl =
          window.location.origin +
          "/share-video/" +
          data.uuid +
          getParamsCustomer().utmstring;
      } else {
        metaUrl = window.location.origin + "/share-video/" + data.uuid;
      }
      const object = JSON.stringify({
        author: data.metaAuthor,
        title: data.metaTitle,
        description: data.metaDescription,
        image: data.metaThumbnail,
        url: encodeURIComponent(metaUrl),
      });
      console.log("object", JSON.parse(object), data.hashtag);
      FB.ui(
        {
          display: "popup",
          method: "share_open_graph",
          hashtag: data.hashtag,
          action_type: "og.likes",
          action_properties: JSON.stringify({
            object: `${metaUrlRedirect}?object=${object}`,
            // object: `https://game.marvyco.com/test-feature/kha/share-2.php?object=${object}`,
          }),
        },
        function (response) {
          // if(Array.isArray(response)){
          // }
          callback(response);
          console.log("Vào type2", response);
        }
      );
      break;
    default:
      break;
  }
}
