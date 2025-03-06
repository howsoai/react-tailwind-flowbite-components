import { FC } from "react";

export type LogInBackgroundProps = {};

export const LogInBackground: FC<LogInBackgroundProps> = ({}) => {
  // const mode = useThemeMode();

  // const videoRef = useRef<HTMLVideoElement | null>(null);
  // useLayoutEffect(() => {
  //   if (!useCDN || !videoRef.current) {
  //     return;
  //   }

  //   videoRef.current.load();
  //   videoRef.current.play();
  // }, [useCDN, theme.palette.mode]);

  // const fileName =
  //   mode.computedMode === "dark"
  //     ? "/data-landscape-shimmer-sand-dunes.mp4"
  //     : "/data-landscape-shimmer-sand-dunes-light.mp4";

  return (
    <div
      className="absolute inset-0 min-h-[100vh] min-w-[100vw]"
      // style={[
      //   {
      //     background: theme.palette.background.default,
      //   },
      // ]}
    >
      {/* <video
        ref={videoRef}
        playsInline
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          zIndex: 0,
          top: 0,
          left: 0,
          minWidth: "100vw",
          minHeight: "100vh",
        }}
      >
        <source
          src={`${CDN_MARKETING_COMMERCIAL_HOST}${fileName}`}
          type="video/mp4"
        />
      </video> */}
    </div>
  );
};
