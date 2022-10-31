import React, { useContext } from "react";
import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	FormControlLabel,
	FormGroup,
	Switch,
} from "@mui/material";
import { AppContext } from "../../store";

const Header: React.FC = () => {
	// store and update theme mode
	const { themeMode, updateTheme } = useContext(AppContext);
	const handleChange = (event: any) => {
		updateTheme(event.target.checked ? "light" : "dark");
	};
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				className="app-bar"
				position="static"
				sx={{
					backgroundColor: "#3e3e3e",
					marginBottom: "1em",
				}}
			>
				<Toolbar>
					<Typography
						variant="h6"
						component="div"
						data-testid="app-bar-title"
						sx={{ flexGrow: 1 }}
					>
						Number Of Lessons
					</Typography>
					<FormGroup>
						<FormControlLabel
							control={
								<Switch
									defaultChecked
									onChange={handleChange}
									aria-label="login switch"
								/>
							}
							label={themeMode == "dark" ? "Dark" : "Light"}
						/>
					</FormGroup>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
