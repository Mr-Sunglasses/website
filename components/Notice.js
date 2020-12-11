// importw { useState, useEffect } from "react";
// import styled from "styled-components";
// import Link from "next/link";

// const NoticeTitle = styled.h5`
// 	font-family: Sen;
// 	font-weight: 700;
// `;

// const NoticeHeading = styled.h4`
// 	font-family: Sen;
// 	font-weight: 900;
// `;

// const Paragraph = styled.p`
// 	font-family: Sen;
// 	font-size: 16px;
// 	margin-bottom: 0;
// `;

// const Button = styled.a`
// 	text-decoration: none !important;
// 	cursor: pointer;
// 	font-family: Sen;
// 	font-weight: 700;
// 	padding: 12px 32px;
// 	border-radius: 4px;
// 	background: #4285f4;
// 	@media (max-width: 768px) {
// 		background: #222222;
// 	}
// 	border: none;
// 	font-size: 16px;
// 	color: #fff !important;
// 	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.2);
// `;

// const Card = styled.div`
// 	display: flex;
// 	flex-direction: row;
// 	justify-content: space-between;
// 	align-items: center;
// 	background: #f9f9f9;
// 	border-radius: 8px;
// 	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);
// 	div {
// 		align-items: center;
// 	}
// 	.notice-head {
// 		max-width: 600px;
// 	}
// 	@media (max-width: 768px) {
// 		flex-wrap: wrap;
// 		background: #db4437;
// 		color: #ffffff !important;
// 		h5,
// 		p {
// 			color: #ffffff;
// 		}
// 		.notice-info,
// 		.notice-head {
// 			margin-bottom: 28px !important;
// 		}
// 	}
// `;

// const Notice = ({ notice }) => {
// 	const { title, venue, date, time, link, text } = notice;
// 	return (
// 		<div className="pb-2">
// 			<Card className="p-5 mb-5">
// 				<div className="notice-info">
// 					<NoticeTitle>{date}</NoticeTitle>
// 					<Paragraph>
// 						{time}, {venue}
// 					</Paragraph>
// 				</div>
// 				<div className="notice-head">
// 					<NoticeHeading>{title}</NoticeHeading>
// 					<Paragraph>{text}</Paragraph>
// 				</div>
// 				<div>
// 					<Button target="_blank" href={link} rel="noopener">
// 						Register
// 					</Button>
// 				</div>
// 			</Card>
// 		</div>
// 	);
// };

// export async function getStaticProps() {
// 	const data = await import("../public/static/data/notice.json");
// 	return {
// 		props: {
// 			notice: data.default
// 		}
// 	};
// }

// export default Notice;
