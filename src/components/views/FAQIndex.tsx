// import SearchBox from '../SearchBox';
import Accordion from '../Accordion';
import FlowerIcon from '/public//images/flower_faq.svg';
import { Container } from '@/components/Grid';
import { Arc } from '@/components/styled-components/Arc';
import faqContent from '@/content/FAQ';
import { deviceSize, mediaQueries } from '@/lib/constants/constants';
import { brandColors, D3 } from '@giveth/ui-design-system';
import Image from 'next/image';
import styled from 'styled-components';


type TFAQ = 'General' | 'Giftomy';

const FAQIndex = () => {
	return (
		<>
			<PurpleArc />
			<Wrapper>
				<MustardArc />
				<FlowerContainer>
					<Image src={FlowerIcon} alt='flower' />
				</FlowerContainer>
				<Title>Frequently Asked Questions</Title>
				<SearchStyles>
					{/*TODO implement search function*/}
					{/*<SearchBox*/}
					{/*	onChange={() => {}}*/}
					{/*	placeholder='What are you looking for?'*/}
					{/*	value=''*/}
					{/*/>*/}
				</SearchStyles>
				<FAQContainer>
					{Object.keys(faqContent).map(i => (
						<Accordion key={i} title={i}>
							{faqContent[i as TFAQ].map(faq => (
								<Accordion
									key={faq.question}
									title={faq.question}
									description={faq.answer}
								/>
							))}
						</Accordion>
					))}
				</FAQContainer>
			</Wrapper>
		</>
	);
};

const FlowerContainer = styled.div`
	position: absolute;
	right: 0;
	top: 150px;
`;

const PurpleArc = styled(Arc)`
	border-width: 100px;
	border-color: ${brandColors.deep[200]} ${brandColors.deep[200]} transparent
		transparent;
	top: 100px;
	left: -550px;
	width: 700px;
	height: 700px;
	transform: rotate(45deg);
	z-index: 0;
	opacity: 0.2;

	${mediaQueries.tablet} {
		left: -350px;
	}
`;

const MustardArc = styled(Arc)`
	border-width: 40px;
	border-color: ${`transparent transparent ${brandColors.mustard[500]} ${brandColors.mustard[500]}`};
	top: 600px;
	right: -140px;
	width: 280px;
	height: 280px;
	transform: rotate(45deg);
	z-index: 0;
	opacity: 0.3;
`;

const FAQContainer = styled(Container)`
	position: relative;
	@media (max-width: ${deviceSize.mobileL + 'px'}) {
		padding: 0;
	}
`;

const SearchStyles = styled.div`
	margin-top: 34px;
	margin-bottom: 91px;
`;

const Title = styled(D3)`
	color: ${brandColors.giv[700]};
	margin-top: 195px;
	margin-bottom: 16px;
`;

const Wrapper = styled.div`
	text-align: center;
	position: relative;
	overflow: hidden;
`;

export default FAQIndex;