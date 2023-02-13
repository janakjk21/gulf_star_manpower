import React from 'react';
import './theme.min.css';
export default function Director() {
	return (
		<div>
			<div className='row'>
				<div className='col-md-7 mb-md-0 mb-3'>
					<img
						className='position-relative rounded-3 zindex-5'
						src='img/city-guide/home/new-1.jpg'
						alt='Article image'
					/>
				</div>
				<div className='col-md-5'>
					<h3 className='h4 from-top'>Amusement Park</h3>
					<ul className='list-unstyled delay-2 from-end'>
						<li className='mb-1 fs-sm'>
							<i className='fi-map-pin text-muted me-2 fs-base' />
							Ollenhauer Str. 29, 10118
						</li>
						<li className='mb-1 fs-sm'>
							<i className='fi-clock text-muted me-2 fs-base' />
							9:00 – 23:00
						</li>
						<li className='mb-1 fs-sm'>
							<i className='fi-wallet text-muted me-2 fs-base' />
							$$
						</li>
					</ul>
					<p className='pb-2 delay-3 from-end d-none d-lg-block'>
						Blandit lorem dictum in&nbsp;velit. Et&nbsp;nisi at&nbsp;faucibus
						mauris pretium enim. Risus sapien nisi aliquam egestas leo dignissim
						ut&nbsp;quis&nbsp;ac. Amet, cras orci justo, tortor nisl aliquet.
						Enim tincidunt tellus nunc, nulla arcu posuere quis. Velit turpis
						orci venenatis risus felis, volutpat convallis varius. Enim non
						euismod adipiscing a&nbsp;enim.
					</p>
					<div className='delay-4 scale-up'>
						<a
							className='btn btn-primary rounded-pill'
							href='city-guide-single.html'>
							View more
							<i className='fi-chevron-right fs-sm ms-2' />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
