import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Educations() {
	return (
		<div>
			<div class='card'>
				<div class='card-content'>
					<h6>
						<strong>EDUCATION</strong>
					</h6>
					<table class='striped'>
						<thead>
							<tr>
								<th>Certificate</th>
								<th>Date</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>B.Tech CSE</td>
								<td>2023</td>
								<td>
									<Link to='/' class='btn blue lighten-2'>
										85%
									</Link>
								</td>
							</tr>
							<tr>
								<td>Python: Tools and project development</td>
								<td>April 2022</td>
								<td>
									<Link to='/details' class='btn blue lighten-2'>
										View 
									</Link>
								</td>
							</tr>
							<tr>
								<td>Core Java</td>
								<td>Jul 2022</td>
								<td>
									<Link to='/details1' class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
							<tr>
								<td>Web Developer</td>
								<td>Dec 2021</td>
								
								<td>
									<Link to='/details2' class='btn blue lighten-2'>
										View
									</Link>
								</td>
							</tr>
							<tr>
								<td>Intermediate</td>
								<td>2018</td>
								<td>
									<Link to='/' class='btn blue lighten-2'>
										80%
									</Link>
								</td>
							</tr>
							<tr>
								<td>Highschool</td>
								<td>2016</td>
								<td>
									<Link to='/' class='btn blue lighten-2'>
										85%
									</Link>
								</td>
							</tr>
							
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
