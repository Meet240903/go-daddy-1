import React, { useState } from "react";
import "../../../assets/style/emailfiles/microsoft/microsoft_Compare.css";

const ComparisonTable = () => {
	const [expandedRow, setExpandedRow] = useState(null);

	const toggleRow = (rowIndex) => {
		setExpandedRow(expandedRow === rowIndex ? null : rowIndex);
	};

	const rows = [
		{
			content:
				"Microsoft 365 Desktop Apps: Download Word, Excel, PowerPoint, Teams, OneDrive, Outlook and more",
			expandedContent:
				"Install Microsoft 365 on up to five PCs or Macs and five tablets or mobile devices per single user and get free updates to the latest version. Includes the full productivity suite: Word, Excel, PowerPoint, Outlook, Teams, OneDrive, SharePoint, and Exchange. Access and Publisher are for PC only.",
			columns: ["-", "-", "✓"],
		},
		{
			content:
				"Microsoft 365 Online: Web versions of Word, Excel, Teams and more",
			expandedContent:
				"Create, edit and share documents right from your cloud storage in any web browser. Includes web apps only.",
			columns: ["-", "✓", "✓"],
		},
		{
			content:
				"Microsoft 365 Mobile: Apps for iPhone, Android and Windows phones",
			expandedContent:
				"CCreate, edit and share files via the Microsoft Office app for your iPhone, Android or Windows phone.",
			columns: ["-", "✓", "✓"],
		},
		{
			content: "1 TB secure online storage via OneDrive",
			expandedContent:
				"Save, access, edit, and share files and photos wherever you are..",
			columns: ["-", "✓", "✓"],
		},
		{
			content:
				"Microsoft Teams: meet, chat and collaborate with your team, customers or suppliers",
			expandedContent:
				"Enjoy online meetings and HD video conferencing. With shared documents and files always available, you can create and exchange ideas whenever you want to and collaborate better.",
			columns: ["-", "✓", "✓"],
		},
		{
			content: "Domain-based email",
			expandedContent:
				"Get professional email that uses your domain name. E.g. name@yourbusiness.com",
			columns: ["✓", "✓", "✓"],
		},
		{
			content: "Storage for email, contacts and calendars",

			columns: ["10GB", "50GB", "50Gb"],
		},
		{
			content: "Sync across all devices",
			expandedContent:
				"Any change you make on one device, such as deleting an email or updating your calendar, will automatically be made on any other devices where you access Microsoft 365.",
			columns: ["✓", "✓", "✓"],
		},
		// Add additional rows here with similar structure for 7 more rows
	];

	return (
		<div className="comparison-table">
			<table>
				<thead>
					<tr>
						<th>Compare Plans</th>
						<th>Email Essentials</th>
						<th>Online Business Essentials</th>
						<th>Business Professional</th>
					</tr>
				</thead>
				<tbody>
					{rows.map((row, index) => (
						<React.Fragment key={index}>
							<tr>
								<td>
									<div className="row-content">
										<span>{row.content}</span>
										<button
											className="arrow-btn"
											onClick={() => toggleRow(index)}
										>
											{expandedRow === index ? "▲" : "▶"}
										</button>
									</div>
								</td>
								{row.columns.map((col, colIndex) => (
									<td key={colIndex} className="center">
										{col}
									</td>
								))}
							</tr>
							{expandedRow === index && (
								<tr className="expanded-row">
									<td colSpan="4">{row.expandedContent}</td>
								</tr>
							)}
							<tr>
								<td colSpan="4">
									<hr />
								</td>
							</tr>
						</React.Fragment>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ComparisonTable;
