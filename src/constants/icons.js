import HomeLight from "../assets/Img/home.svg";
import WorkDark from "../assets/Img/work.svg";
import CalenderDark from "../assets/Img/calender.svg";
import ReportDark from "../assets/Img/report.svg";
import ReportSearchDark from "../assets/Img/report-search.png";
import HelpDark from "../assets/Img/help.svg";
import Search from "../assets/Img/search.svg";
import palette from "../theme/palette";

export const HomeIcon = ({ bg }) => {
	return (
		<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M17.9937 7.98438C17.9937 8.54688 17.525 8.9875 16.9937 8.9875H15.9937L16.0156 13.9906C16.0156 14.0781 16.0094 14.1594 16 14.2437V14.75C16 15.4406 15.4406 16 14.75 16H14.25C14.2156 16 14.1813 15.9719 14.1469 15.9969C14.1031 15.9719 14.0594 16 14.0156 16H12.25C11.5594 16 11 15.4406 11 14.75V12C11 11.4469 10.5531 11 10 11H8C7.44687 11 7 11.4469 7 12V14.75C7 15.4406 6.44063 16 5.75 16H4.00313C3.95625 16 3.90937 15.9969 3.8625 15.9937C3.825 15.9969 3.7875 16 3.75 16H3.25C2.55969 16 2 15.4406 2 14.75V11.25C2 11.2219 2.00094 11.1906 2.00281 11.1625V8.9875H1.00156C0.438125 8.9875 0 8.54688 0 7.98438C0 7.70312 0.093875 7.45312 0.312813 7.23438L8.325 0.2505C8.54375 0.0313125 8.79375 0 9.0125 0C9.23125 0 9.48125 0.062625 9.67188 0.219187L17.65 7.23438C17.9 7.45312 18.0281 7.70312 17.9937 7.98438Z"
				fill={`${bg}`}
			/>
		</svg>
	);
};

const AppIcons = {
	HomeLight,
	WorkDark,
	CalenderDark,
	ReportDark,
	ReportSearchDark,
	HelpDark,
	Search,
};

export default AppIcons;
