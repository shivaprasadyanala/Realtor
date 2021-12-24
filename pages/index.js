import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react'
import Property from '../components/property';
import { baseUrl, fetchApi } from '../utils/fetchApi';
const Banner = (props) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={props.imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{props.purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{props.title1}<br />{props.title2}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="7" color="gray.700">{props.desc1}<br />{props.desc2}</Text>
      <Button fontSize="xl" >
        <Link href={props.linkName}>{props.buttonText}</Link>
      </Button>
    </Box>

  </Flex >
)
export default function Home({ propertiesForSale, propertiesForRent }) {
  console.log(propertiesForSale, propertiesForRent);
  return (
    <Box >

      <Banner purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apartments"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <Flex flexWrap="wrap">
        {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}

      </Flex>
      <Banner purpose="buy a home"
        title1="Find , Buy & Own your"
        title2="Dream home"
        desc1="Explore Apartments"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4" />
      <Flex flexWrap="wrap">
        {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}

      </Flex>
    </Box>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,

    }
  }
}