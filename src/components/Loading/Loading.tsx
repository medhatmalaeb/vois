import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

const Loading: React.FC = () => {
	return (
		<Box
			className="loading-screen"
			sx={{
				width: "200px",
				margin: "50vh auto auto auto",
			}}
		>
			<LinearProgress />
		</Box>
	);
};
export default Loading;
