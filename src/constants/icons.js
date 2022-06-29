import HomeLight from "../assets/Img/home.svg";
import WorkDark from "../assets/Img/work.svg";
import CalenderDark from "../assets/Img/calender.svg";
import ReportDark from "../assets/Img/report.svg";
import ReportSearchDark from "../assets/Img/report-search.png";
import HelpDark from "../assets/Img/help.svg";
import Search from "../assets/Img/search.svg";
import { createSvgIcon } from "@mui/material";

export const HomeIcon = createSvgIcon(
	<path d="M23.9917 11.4795C23.9917 12.2178 23.3667 12.7961 22.6583 12.7961H21.325L21.3542 19.3627C21.3542 19.4775 21.3458 19.5842 21.3333 19.6949V20.3594C21.3333 21.2658 20.5875 22 19.6667 22H19C18.9542 22 18.9083 21.9631 18.8625 21.9959C18.8042 21.9631 18.7458 22 18.6875 22H16.3333C15.4125 22 14.6667 21.2658 14.6667 20.3594V16.75C14.6667 16.024 14.0708 15.4375 13.3333 15.4375H10.6667C9.92917 15.4375 9.33333 16.024 9.33333 16.75V20.3594C9.33333 21.2658 8.5875 22 7.66667 22H5.3375C5.275 22 5.2125 21.9959 5.15 21.9918C5.1 21.9959 5.05 22 5 22H4.33333C3.41292 22 2.66667 21.2658 2.66667 20.3594V15.7656C2.66667 15.7287 2.66792 15.6877 2.67042 15.6508V12.7961H1.33542C0.584167 12.7961 0 12.2178 0 11.4795C0 11.1104 0.125167 10.7822 0.417083 10.4951L11.1 1.32878C11.3917 1.0411 11.725 1 12.0167 1C12.3083 1 12.6417 1.0822 12.8958 1.28768L23.5333 10.4951C23.8667 10.7822 24.0375 11.1104 23.9917 11.4795Z" />,
	"Home"
);

export const WorkIcon = createSvgIcon(
	<>
		<path d="M12.0038 15.2H7.8C7.47 15.2 7.2 14.93 7.2 14.6V12.8H0V18.2C0 19.16 0.840375 20 1.8 20H13.5075C12.5663 18.86 12 17.3937 12 15.8C12 15.5975 12.0188 15.3987 12.0038 15.2ZM18.6 9.2C18.8026 9.2 19.002 9.21238 19.2 9.23025V7.4C19.2 6.44 18.36 5.6 17.4 5.6H14.4V3.8C14.4 2.84038 13.56 2 12.6 2H6.6C5.64 2 4.8 2.84038 4.8 3.8V5.6H1.8C0.840375 5.6 0 6.44 0 7.4V11.6H13.5075C14.7188 10.1337 16.5488 9.2 18.6 9.2ZM12.6 5.6H6.6V3.8H12.6V5.6Z" />
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M18.5 21C21.5376 21 24 18.5376 24 15.5C24 12.4624 21.5376 10 18.5 10C15.4624 10 13 12.4624 13 15.5C13 18.5376 15.4624 21 18.5 21ZM19 13.5C19 13.2239 18.7761 13 18.5 13C18.2239 13 18 13.2239 18 13.5V15H16.5C16.2239 15 16 15.2239 16 15.5C16 15.7761 16.2239 16 16.5 16H18V17.5C18 17.7761 18.2239 18 18.5 18C18.7761 18 19 17.7761 19 17.5V16H20.5C20.7761 16 21 15.7761 21 15.5C21 15.2239 20.7761 15 20.5 15H19V13.5Z"
		/>
	</>,
	"Work"
);

export const CalenderIcon = createSvgIcon(
	<path d="M8.85714 1.5V3H15.1429V1.5C15.1429 0.671719 15.8451 0 16.7143 0C17.5835 0 18.2857 0.671719 18.2857 1.5V3H20.6429C21.9442 3 23 4.00734 23 5.25V7.5H1V5.25C1 4.00734 2.05531 3 3.35714 3H5.71429V1.5C5.71429 0.671719 6.41652 0 7.28571 0C8.15491 0 8.85714 0.671719 8.85714 1.5ZM1 9H23V21.75C23 22.9922 21.9442 24 20.6429 24H3.35714C2.05531 24 1 22.9922 1 21.75V9ZM4.14286 14.25C4.14286 14.6625 4.49446 15 4.92857 15H6.5C6.93214 15 7.28571 14.6625 7.28571 14.25V12.75C7.28571 12.3375 6.93214 12 6.5 12H4.92857C4.49446 12 4.14286 12.3375 4.14286 12.75V14.25ZM10.4286 14.25C10.4286 14.6625 10.7821 15 11.2143 15H12.7857C13.2179 15 13.5714 14.6625 13.5714 14.25V12.75C13.5714 12.3375 13.2179 12 12.7857 12H11.2143C10.7821 12 10.4286 12.3375 10.4286 12.75V14.25ZM17.5 12C17.0679 12 16.7143 12.3375 16.7143 12.75V14.25C16.7143 14.6625 17.0679 15 17.5 15H19.0714C19.5036 15 19.8571 14.6625 19.8571 14.25V12.75C19.8571 12.3375 19.5036 12 19.0714 12H17.5ZM4.14286 20.25C4.14286 20.6625 4.49446 21 4.92857 21H6.5C6.93214 21 7.28571 20.6625 7.28571 20.25V18.75C7.28571 18.3375 6.93214 18 6.5 18H4.92857C4.49446 18 4.14286 18.3375 4.14286 18.75V20.25ZM11.2143 18C10.7821 18 10.4286 18.3375 10.4286 18.75V20.25C10.4286 20.6625 10.7821 21 11.2143 21H12.7857C13.2179 21 13.5714 20.6625 13.5714 20.25V18.75C13.5714 18.3375 13.2179 18 12.7857 18H11.2143ZM16.7143 20.25C16.7143 20.6625 17.0679 21 17.5 21H19.0714C19.5036 21 19.8571 20.6625 19.8571 20.25V18.75C19.8571 18.3375 19.5036 18 19.0714 18H17.5C17.0679 18 16.7143 18.3375 16.7143 18.75V20.25Z" />,
	"Work"
);

export const ReportIcon = createSvgIcon(
	<>
		<path d="M14.75 0.285534V6C14.75 6.13807 14.8619 6.25 15 6.25H20.7145L14.75 0.285534Z" />
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M5 0H13.25V6C13.25 6.9665 14.0335 7.75 15 7.75H21V22C21 23.1046 20.1046 24 19 24H5C3.89543 24 3 23.1046 3 22V2C3 0.89543 3.89543 0 5 0ZM17.0769 15.4615C17.0769 16.5569 16.7521 17.6277 16.1435 18.5385C15.535 19.4493 14.67 20.1592 13.6579 20.5784C12.6459 20.9976 11.5323 21.1073 10.458 20.8936C9.38361 20.6799 8.39675 20.1524 7.62218 19.3778C6.84761 18.6033 6.32012 17.6164 6.10642 16.542C5.89272 15.4677 6.0024 14.3541 6.42159 13.3421C6.84078 12.33 7.55066 11.465 8.46146 10.8565C9.37225 10.2479 10.4431 9.92308 11.5385 9.92308V15.4615H17.0769ZM14.581 9.42159C13.9091 9.14326 13.1889 9 12.4615 9V14.5385L18 14.5385C18 13.8111 17.8567 13.0909 17.5784 12.419C17.3001 11.747 16.8921 11.1365 16.3778 10.6222C15.8635 10.1079 15.253 9.69992 14.581 9.42159Z"
		/>
	</>,
	"Report"
);

export const SearchIcon = createSvgIcon(
	<>
		<g clipPath="url(#clip0_3439_17470)">
			<path
				d="M2.14771 2.76443C1.57385 1.04262 3.29568 0.468689 5.01749 0.468689"
				stroke="#407991"
				strokeWidth="1.14787"
			/>
			<path
				d="M18.7921 0.468736C20.514 0.468748 21.5 2.25288 21.4998 4.00003"
				stroke="#407991"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M1 3.3383C1 2.70435 1.51392 2.19043 2.14787 2.19043H18.2181C18.852 2.19043 19.3659 2.70435 19.3659 3.3383V11.3731C18.3188 9.97927 16.6519 9.07774 14.7744 9.07774C11.6046 9.07774 9.035 11.6473 9.035 14.8171C9.035 17.9869 11.6046 20.5564 14.7744 20.5564C15.769 20.5564 16.7045 20.3034 17.5201 19.8583L19.3659 21.704V22.8521C19.3659 23.4861 18.852 24 18.2181 24H2.14787C1.51392 24 1 23.4861 1 22.8521V3.3383Z"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M1 1.14787C1 0.51392 1.51392 0 2.14787 0H2.75H3.33333H20.8521C21.4861 0 22 0.513919 22 1.14787V19.4682L21 18.4682V1H2V22H19.6618L20.4443 22.7825C20.5269 22.8652 20.6159 22.9377 20.7096 23H2.14787C1.51392 23 1 22.4861 1 21.8521V1.14787Z"
			/>
			<rect x="6.73926" y="4.48627" width="8.72382" height="1.72181" fill="#D9D9D9" />
			<circle
				cx="14.7743"
				cy="14.8171"
				r="4.01755"
				fill="white"
				stroke="#407991"
				strokeWidth="1.14787"
			/>
			<line
				x1="18.2878"
				y1="18.2606"
				x2="22.8097"
				y2="22.7825"
				stroke="#407991"
				strokeWidth="1.72181"
				strokeLinecap="round"
			/>
		</g>
		<defs>
			<clipPath id="clip0_3439_17470">
				<rect width="24" height="24" fill="white" />
			</clipPath>
		</defs>
	</>,
	"Search"
);

export const HelpIcon = createSvgIcon(
	<>
		<g clipPath="url(#clip0_3439_17627)">
			<path d="M12 0C5.37188 0 0 5.37188 0 12C0 18.6281 5.37188 24 12 24C18.6281 24 24 18.6281 24 12C24 5.37188 18.6281 0 12 0ZM12 18.75C11.1562 18.75 10.5 18.0938 10.5 17.25C10.5 16.4062 11.1141 15.75 12 15.75C12.8016 15.75 13.5 16.4062 13.5 17.25C13.5 18.0938 12.8016 18.75 12 18.75ZM15.2391 12.0938L13.125 13.4062V13.5C13.125 14.1094 12.6094 14.625 12 14.625C11.3906 14.625 10.875 14.1094 10.875 13.5V12.75C10.875 12.375 11.0625 12 11.4375 11.7656L14.1094 10.1719C14.4375 9.98438 14.625 9.65625 14.625 9.28125C14.625 8.71875 14.1141 8.25 13.5516 8.25H11.1562C10.5516 8.25 10.125 8.71875 10.125 9.28125C10.125 9.89062 9.60938 10.4062 9 10.4062C8.39062 10.4062 7.875 9.89062 7.875 9.28125C7.875 7.45312 9.32813 6 11.1141 6H13.5094C15.4219 6 16.875 7.45312 16.875 9.28125C16.875 10.4062 16.2656 11.4844 15.2391 12.0938Z" />
		</g>
		<defs>
			<clipPath id="clip0_3439_17627">
				<rect width="24" height="24" fill="white" />
			</clipPath>
		</defs>
	</>,
	"help"
);

export const CopyIcon = ({ bg = "white" }) => {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M17.6699 2.48309L15.5166 0.329766C15.3074 0.118512 15.0191 0 14.7203 0H8.96871C7.72594 0 6.71871 1.00758 6.71871 2.25L6.7194 11.25C6.75035 12.4945 7.75934 13.5 9.00036 13.5H15.7504C16.9879 13.5 18.0004 12.4875 18.0004 11.25V3.27832C18.0004 2.9802 17.8808 2.69402 17.6699 2.48309ZM16.3129 11.25C16.3129 11.5606 16.061 11.8125 15.7504 11.8125H8.96871C8.658 11.8125 8.40621 11.5606 8.40621 11.25V2.25457C8.40621 1.94393 8.65807 1.69207 8.96871 1.69207H13.4687L13.5004 3.375C13.5004 3.99621 14.0041 4.5 14.6254 4.5H16.2812V11.25H16.3129ZM9.56286 15.75C9.56286 16.0606 9.311 16.3125 9.00036 16.3125H2.21871C1.908 16.3125 1.65621 16.0606 1.65621 15.75L1.68715 6.75352C1.68715 6.44288 1.93901 6.19102 2.24965 6.19102H5.62535V4.5H2.25C1.00723 4.5 0 5.50723 0 6.75L0.000344531 15.75C0.000421875 16.991 1.00793 18 2.25035 18H9.00036C10.2379 18 11.2504 16.9875 11.2504 15.75V14.625H9.5945L9.56286 15.75Z"
				fill="#407991"
			/>
			<rect x="8.09961" width="9.9" height="12.6" rx="1.8" fill="#407991" />
		</svg>
	);
};
export const EditIcon = ({ bg = "white" }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="18"
			height="18"
			fill="none"
			viewBox="0 0 18 18"
		>
			<g clipPath="url(#clip0_2129_8513)">
				<path
					fill="#105776"
					fillOpacity="0.8"
					d="M17.208 1.418a1.964 1.964 0 010 2.78l-1.052 1.056-3.44-3.439L13.772.76a1.965 1.965 0 012.78 0l.656.658zM6.051 8.483l5.872-5.874 3.44 3.438-5.876 5.872a1.947 1.947 0 01-.769.477l-3.116 1.04c-.334.098-.636.02-.864-.236-.224-.196-.302-.53-.203-.832l1.039-3.116c.098-.292.26-.555.477-.769zm.688-6.268c.621 0 1.123.534 1.123 1.123 0 .653-.502 1.123-1.123 1.123h-3.37c-.62 0-1.123.533-1.123 1.123v9.017c0 .62.503 1.123 1.123 1.123h8.985c.622 0 1.123-.502 1.123-1.123V11.2c0-.59.502-1.123 1.124-1.123.62 0 1.123.533 1.123 1.123v3.4a3.37 3.37 0 01-3.37 3.37H3.37A3.37 3.37 0 010 14.6V5.585a3.37 3.37 0 013.37-3.37h3.369z"
				></path>
			</g>
			<defs>
				<clipPath id="clip0_2129_8513">
					<path fill="#fff" d="M0 0H17.97V17.97H0z"></path>
				</clipPath>
			</defs>
		</svg>
	);
};
export const DeleteIcon = ({ bg = "white" }) => {
	return (
		<svg
			width="15"
			height="18"
			viewBox="0 0 15 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4.52679 0.592299C4.70759 0.229286 5.07924 0 5.48438 0H9.51563C9.92076 0 10.2924 0.229286 10.4732 0.592299L10.7143 1.07143H13.9286C14.5212 1.07143 15 1.55123 15 2.14286C15 2.73449 14.5212 3.21429 13.9286 3.21429H1.07143C0.479799 3.21429 0 2.73449 0 2.14286C0 1.55123 0.479799 1.07143 1.07143 1.07143H4.28571L4.52679 0.592299ZM1.04129 4.28571H13.9286V15C13.9286 16.1819 12.9676 17.1429 11.7857 17.1429H3.18415C2.03069 17.1429 1.04129 16.1819 1.04129 15V4.28571ZM3.71987 6.96428V14.4643C3.71987 14.7589 3.99107 15 4.25558 15C4.58036 15 4.7913 14.7589 4.7913 14.4643V6.96428C4.7913 6.66964 4.58036 6.42857 4.25558 6.42857C3.99107 6.42857 3.71987 6.66964 3.71987 6.96428ZM6.93415 6.96428V14.4643C6.93415 14.7589 7.20536 15 7.46987 15C7.79464 15 8.03572 14.7589 8.03572 14.4643V6.96428C8.03572 6.66964 7.79464 6.42857 7.46987 6.42857C7.20536 6.42857 6.93415 6.66964 6.93415 6.96428ZM10.1786 6.96428V14.4643C10.1786 14.7589 10.4196 15 10.7143 15C11.0089 15 11.25 14.7589 11.25 14.4643V6.96428C11.25 6.66964 11.0089 6.42857 10.7143 6.42857C10.4196 6.42857 10.1786 6.66964 10.1786 6.96428Z"
				fill={`${bg}`}
				fillOpacity="0.8"
			/>
		</svg>
	);
};
export const EyeIcon = ({ bg = "white" }) => {
	return (
		<svg
			width="20"
			height="15"
			viewBox="0 0 20 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9.70876 4.09439C9.80598 4.08482 9.90321 4.08163 10.0004 4.08163C11.8408 4.08163 13.3339 5.42411 13.3339 7.14286C13.3339 8.83291 11.8408 10.2041 10.0004 10.2041C8.12883 10.2041 6.66696 8.83291 6.66696 7.14286C6.66696 7.05357 6.67043 6.96429 6.68085 6.875C7.00378 7.0185 7.3788 7.14286 7.77812 7.14286C9.00387 7.14286 10.0004 6.22768 10.0004 5.10204C10.0004 4.73533 9.86502 4.39094 9.70876 4.09439ZM16.6882 2.57015C18.3133 3.95408 19.4002 5.58355 19.9141 6.75064C20.0286 7.00255 20.0286 7.28316 19.9141 7.53508C19.4002 8.67347 18.3133 10.3029 16.6882 11.7156C15.0527 13.1122 12.8061 14.2857 10.0004 14.2857C7.19476 14.2857 4.94813 13.1122 3.31334 11.7156C1.68827 10.3029 0.602114 8.67347 0.0854594 7.53508C-0.0284865 7.28316 -0.0284865 7.00255 0.0854594 6.75064C0.602114 5.58355 1.68827 3.95408 3.31334 2.57015C4.94813 1.17474 7.19476 0 10.0004 0C12.8061 0 15.0527 1.17474 16.6882 2.57015ZM10.0004 2.55102C7.2399 2.55102 5.00022 4.60778 5.00022 7.14286C5.00022 9.67793 7.2399 11.7347 10.0004 11.7347C12.761 11.7347 15.0007 9.67793 15.0007 7.14286C15.0007 4.60778 12.761 2.55102 10.0004 2.55102Z"
				fill={`${bg}`}
			/>
		</svg>
	);
};
export const AddIcon = ({ bg = "white" }) => {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0 9C0 4.02891 4.02891 0 9 0C13.9711 0 18 4.02891 18 9C18 13.9711 13.9711 18 9 18C4.02891 18 0 13.9711 0 9ZM9 12.9375C9.46758 12.9375 9.84375 12.5613 9.84375 12.0938V9.84375H12.0938C12.5613 9.84375 12.9375 9.46758 12.9375 9C12.9375 8.53242 12.5613 8.15625 12.0938 8.15625H9.84375V5.90625C9.84375 5.43867 9.46758 5.0625 9 5.0625C8.53242 5.0625 8.15625 5.43867 8.15625 5.90625V8.15625H5.90625C5.43867 8.15625 5.0625 8.53242 5.0625 9C5.0625 9.46758 5.43867 9.84375 5.90625 9.84375H8.15625V12.0938C8.15625 12.5613 8.53242 12.9375 9 12.9375Z"
				fill={`${bg}`}
			/>
		</svg>
	);
};
export const ExportIcon = ({ bg = "white" }) => {
	return (
		<svg
			width="14"
			height="19"
			viewBox="0 0 14 19"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_1835_37531)">
				<path
					d="M13.3182 3.40448L10.5973 0.683229C10.1573 0.245802 9.56302 0 8.94687 0H2.33333C1.04453 0 0 1.04453 0 2.33333L0.000236979 16.3333C0.000236979 17.6218 1.04477 18.6667 2.33357 18.6667H11.6667C12.95 18.6667 14 17.6167 14 16.3333V5.05312C14 4.43698 13.7557 3.84271 13.3182 3.40448ZM12.25 16.3333C12.25 16.6555 11.9888 16.9167 11.6667 16.9167H2.33406C2.01184 16.9167 1.75073 16.6555 1.75073 16.3333L1.75 2.33807C1.75 2.01593 2.01119 1.75474 2.33333 1.75474H8.16667V4.66667C8.16667 5.31088 8.68911 5.83333 9.33333 5.83333H12.2172V16.3333H12.25ZM8.3526 8.50573L7 10.2411L5.6474 8.50573C5.35208 8.12292 4.80521 8.05365 4.4224 8.3526C4.03958 8.64792 3.97031 9.19844 4.26927 9.58125L5.89167 11.6667L4.26818 13.7539C3.97082 14.1356 4.04031 14.6858 4.42086 14.9822C4.58281 15.1047 4.76875 15.1667 4.92552 15.1667C5.18642 15.1667 5.44505 15.0504 5.61714 14.8294L7 13.0922L8.35115 14.8294C8.52396 15.05 8.78281 15.1667 9.04167 15.1667C9.22852 15.1667 9.41755 15.1063 9.57833 14.9821C9.95896 14.6859 10.0282 14.1355 9.73102 13.7538L8.10833 11.6667L9.73182 9.57943C10.0292 9.19771 9.95969 8.64755 9.57913 8.35114C9.19479 8.05364 8.64792 8.12292 8.3526 8.50573Z"
					fill={`${bg}`}
				/>
			</g>
			<defs>
				<clipPath id="clip0_1835_37531">
					<rect width="14" height="18.6667" fill={"white"} />
				</clipPath>
			</defs>
		</svg>
	);
};
export const ArrowCheckIcon = ({ bg = "#105776" }) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M19.1429 2H4.85714C3.27902 2 2 3.27902 2 4.85714V19.1429C2 20.7205 3.27902 22 4.85714 22H19.1429C20.721 22 22 20.7205 22 19.1429V4.85714C22 3.27902 20.7188 2 19.1429 2ZM15.942 12.7857L10.942 17.4286C10.7411 17.6161 10.4777 17.7143 10.2143 17.7143C10.0692 17.7143 9.92411 17.685 9.78598 17.625C9.39732 17.4554 9.14286 17.067 9.14286 16.6429V7.35714C9.14286 6.93165 9.39536 6.54509 9.78616 6.375C10.1768 6.20759 10.6317 6.28295 10.9442 6.5717L15.9442 11.2146C16.1607 11.3795 16.2857 11.7009 16.2857 12C16.2857 12.2991 16.1607 12.5804 15.942 12.7857Z"
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

export const AppIcon = ({ icon, ...props }) => {
	switch (icon) {
		case "Home":
			return <HomeIcon {...props} />;
		case "Work":
			return <WorkIcon {...props} />;
		case "Calender":
			return <CalenderIcon {...props} />;
		case "Report":
			return <ReportIcon {...props} />;
		case "Search":
			return <SearchIcon {...props} />;
		case "Help":
			return <HelpIcon {...props} />;

		default:
			return HomeIcon;
	}
};

export default AppIcons;
