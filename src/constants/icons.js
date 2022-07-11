import { createSvgIcon } from "@mui/material";

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
		case "ReportSearch":
			return <ReportSearchIcon {...props} />;
		case "Help":
			return <HelpIcon {...props} />;
		case "Search":
			return <SearchIcon {...props} />;
		case "Add":
			return <AddIcon {...props} />;
		case "Delete":
			return <DeleteIcon {...props} />;
		case "Planner":
			return <PlannerIcon {...props} />;
		case "Eye":
			return <EyeIcon {...props} />;
		case "Edit":
			return <EditIcon {...props} />;

		default:
			return HomeIcon;
	}
};

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

export const ReportSearchIcon = createSvgIcon(
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

export const AddIcon = createSvgIcon(
	<>
		<path d="M0 12C0 5.37188 5.37188 0 12 0C18.6281 0 24 5.37188 24 12C24 18.6281 18.6281 24 12 24C5.37188 24 0 18.6281 0 12ZM12 17.25C12.6234 17.25 13.125 16.7484 13.125 16.125V13.125H16.125C16.7484 13.125 17.25 12.6234 17.25 12C17.25 11.3766 16.7484 10.875 16.125 10.875H13.125V7.875C13.125 7.25156 12.6234 6.75 12 6.75C11.3766 6.75 10.875 7.25156 10.875 7.875V10.875H7.875C7.25156 10.875 6.75 11.3766 6.75 12C6.75 12.6234 7.25156 13.125 7.875 13.125H10.875V16.125C10.875 16.7484 11.3766 17.25 12 17.25Z" />
	</>,
	"add"
);

export const DeleteIcon = createSvgIcon(
	<path
		d="M7.88009 1.77006C8.11494 1.2981 8.5977 1 9.12395 1H14.3604C14.8866 1 15.3694 1.2981 15.6042 1.77006L15.9174 2.39299H20.0926C20.8624 2.39299 21.4843 3.01678 21.4843 3.78597C21.4843 4.55516 20.8624 5.17896 20.0926 5.17896H3.39174C2.62324 5.17896 2 4.55516 2 3.78597C2 3.01678 2.62324 2.39299 3.39174 2.39299H7.56695L7.88009 1.77006ZM3.35259 6.57194H20.0926V20.5018C20.0926 22.0384 18.8444 23.2878 17.3091 23.2878H6.13607C4.63778 23.2878 3.35259 22.0384 3.35259 20.5018V6.57194ZM6.83194 10.0544V19.8053C6.83194 20.1884 7.18422 20.5018 7.52781 20.5018C7.94968 20.5018 8.22367 20.1884 8.22367 19.8053V10.0544C8.22367 9.67133 7.94968 9.35791 7.52781 9.35791C7.18422 9.35791 6.83194 9.67133 6.83194 10.0544ZM11.0071 10.0544V19.8053C11.0071 20.1884 11.3594 20.5018 11.703 20.5018C12.1249 20.5018 12.438 20.1884 12.438 19.8053V10.0544C12.438 9.67133 12.1249 9.35791 11.703 9.35791C11.3594 9.35791 11.0071 9.67133 11.0071 10.0544ZM15.2215 10.0544V19.8053C15.2215 20.1884 15.5346 20.5018 15.9174 20.5018C16.3001 20.5018 16.6132 20.1884 16.6132 19.8053V10.0544C16.6132 9.67133 16.3001 9.35791 15.9174 9.35791C15.5346 9.35791 15.2215 9.67133 15.2215 10.0544Z"
		fillOpacity="0.8"
	/>,
	"delete"
);

export const SearchIcon = createSvgIcon(
	<>
		<g clipPath="url(#clip0_3483_1413)">
			<path d="M23.4516 20.7972L17.8406 15.1865C19.1166 13.2923 19.7461 10.9257 19.4091 8.40395C18.8344 4.1146 15.3188 0.623966 11.025 0.0803799C4.64106 -0.727383 -0.727088 4.64051 0.0807586 11.0242C0.624511 15.3196 4.11577 18.8379 8.40579 19.4097C10.9277 19.7467 13.2949 19.1174 15.1886 17.8414L20.7996 23.4521C21.5318 24.1842 22.7191 24.1842 23.4513 23.4521C24.1828 22.719 24.1828 21.5284 23.4516 20.7972ZM3.70777 9.74921C3.70777 6.44091 6.39934 3.74946 9.70779 3.74946C13.0162 3.74946 15.7078 6.44091 15.7078 9.74921C15.7078 13.0575 13.0162 15.749 9.70779 15.749C6.39934 15.749 3.70777 13.0584 3.70777 9.74921Z" />
		</g>
		<defs>
			<clipPath id="clip0_3483_1413">
				<rect width="24" height="24" fill="white" />
			</clipPath>
		</defs>
	</>,
	"search"
);

export const PlannerIcon = createSvgIcon(
	<>
		<path
			d="M11.2855 18.5355C10.9203 18.9738 10.2672 18.9738 9.86328 18.5355L7.11328 15.7855C6.71367 15.4203 6.71367 14.7672 7.11328 14.3633C7.51719 13.9637 8.17031 13.9637 8.53555 14.3633L10.5938 16.3871L14.6758 12.3008C15.0797 11.9012 15.7328 11.9012 16.098 12.3008C16.5363 12.7047 16.5363 13.3578 16.098 13.723L11.2855 18.5355ZM7.5 1C8.07148 1 8.53125 1.46191 8.53125 2.03125V3.75H14.7188V2.03125C14.7188 1.46191 15.1785 1 15.75 1C16.3215 1 16.7812 1.46191 16.7812 2.03125V3.75H18.5C20.0168 3.75 21.25 4.98105 21.25 6.5V20.25C21.25 21.7668 20.0168 23 18.5 23H4.75C3.23105 23 2 21.7668 2 20.25V6.5C2 4.98105 3.23105 3.75 4.75 3.75H6.46875V2.03125C6.46875 1.46191 6.92852 1 7.5 1ZM19.1875 9.25H4.0625V20.25C4.0625 20.6281 4.37016 20.9375 4.75 20.9375H18.5C18.8781 20.9375 19.1875 20.6281 19.1875 20.25V9.25Z"
			fillOpacity="0.8"
		/>
	</>,
	"planner"
);

export const EyeIcon = createSvgIcon(
	<>
		<path
			d="M11.6796 7.90438C11.7866 7.89292 11.8935 7.8891 12.0005 7.8891C14.0249 7.8891 15.6673 9.49716 15.6673 11.5559C15.6673 13.5803 14.0249 15.2228 12.0005 15.2228C9.94171 15.2228 8.33365 13.5803 8.33365 11.5559C8.33365 11.449 8.33747 11.342 8.34893 11.2351C8.70416 11.407 9.11667 11.5559 9.55593 11.5559C10.9043 11.5559 12.0005 10.4597 12.0005 9.11138C12.0005 8.67212 11.8515 8.2596 11.6796 7.90438ZM19.357 6.07861C21.1446 7.73632 22.3402 9.68814 22.9055 11.0861C23.0315 11.3879 23.0315 11.724 22.9055 12.0257C22.3402 13.3893 21.1446 15.3412 19.357 17.0332C17.558 18.7062 15.0867 20.1119 12.0005 20.1119C8.91424 20.1119 6.44295 18.7062 4.64468 17.0332C2.8571 15.3412 1.66233 13.3893 1.09401 12.0257C0.968665 11.724 0.968665 11.3879 1.09401 11.0861C1.66233 9.68814 2.8571 7.73632 4.64468 6.07861C6.44295 4.40714 8.91424 3 12.0005 3C15.0867 3 17.558 4.40714 19.357 6.07861ZM12.0005 6.05569C8.96389 6.05569 6.50024 8.51934 6.50024 11.5559C6.50024 14.5925 8.96389 17.0562 12.0005 17.0562C15.0371 17.0562 17.5007 14.5925 17.5007 11.5559C17.5007 8.51934 15.0371 6.05569 12.0005 6.05569Z"
			fillOpacity="0.8"
		/>
	</>,
	"eye"
);

export const EditIcon = createSvgIcon(
	<>
		<g clipPath="url(#clip0_3511_1418)">
			<path
				d="M22.0676 2.51014C23.0086 3.44987 23.0086 4.97354 22.0676 5.91327L20.7785 7.20662L16.5676 2.99655L17.8609 1.70491C18.802 0.765031 20.323 0.765031 21.2641 1.70491L22.0676 2.51014ZM8.40781 11.1597L15.5965 3.9685L19.8074 8.17772L12.6145 15.3664C12.3523 15.6328 12.0301 15.8304 11.6734 15.9508L7.85781 17.2226C7.44961 17.3429 7.08008 17.2484 6.80078 16.9347C6.52578 16.6941 6.43125 16.2859 6.55156 15.9164L7.82344 12.1008C7.94375 11.7441 8.14141 11.4219 8.40781 11.1597ZM9.25 3.48553C10.0105 3.48553 10.625 4.13995 10.625 4.86053C10.625 5.65975 10.0105 6.23553 9.25 6.23553H5.125C4.36574 6.23553 3.75 6.88866 3.75 7.61053V18.6492C3.75 19.4097 4.36574 20.0242 5.125 20.0242H16.125C16.8855 20.0242 17.5 19.4097 17.5 18.6492V14.4855C17.5 13.7637 18.1145 13.1105 18.875 13.1105C19.6355 13.1105 20.25 13.7637 20.25 14.4855V18.6492C20.25 20.9265 18.4023 22.7742 16.125 22.7742H5.125C2.8468 22.7742 1 20.9265 1 18.6492V7.61053C1 5.33319 2.8468 3.48553 5.125 3.48553H9.25Z"
				fill="#105776"
				fillOpacity="0.8"
			/>
		</g>
		<defs>
			<clipPath id="clip0_3511_1418">
				<rect width="22" height="22" fill="white" transform="translate(1 1)" />
			</clipPath>
		</defs>
	</>,
	"edit"
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
