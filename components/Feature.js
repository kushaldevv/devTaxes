import { Image, Box, Text, Select, Button, Wrap, WrapItem, Link, Center } from '@chakra-ui/react'
import React from 'react'

function Feature() {
  return (
    <Box
      bg="#4b53db"
      minH="95vh"
      h="100%"
      w="100vw"
      bgImage="radial-gradient(at 3% 100%, rgb(142, 201, 245) 0px, transparent 45%), radial-gradient(at 100% 0%, rgb(83, 86, 172) 0px, transparent 50%), radial-gradient(at 100% 94%, rgb(232, 115, 138) 0px, transparent 50%), radial-gradient(at 100% 36%, rgb(71, 0, 153) 0px, transparent 50%), radial-gradient(at 0% 67%, rgb(201, 84, 118) 0px, transparent 50%)"
      textAlign="center"
      overflowX="hidden"
    >
      <Box pt={["null", "null", "null", "-5vw  ", "5vw"]}>
        <Text
          pos="relative"
          zIndex="2"
          color="white"
          pt="100px"
          fontWeight="800"
          fontSize={["30px", "40px", "50px", "4.25vw"]}
          fontFamily=".SF NFS"
        >
          Where Is My Refund?
        </Text>
        <Text
          pos="relative"
          zIndex="2"
          color="white"
          fontSize={["18px", "18px", "18px", "1.2vw"]}
        >
          Check your Federal or State refund status below.
        </Text>
        <Center>
          <Image
            src="/pictures/purplebg.png"
            alt="frame"
            pos="absolute"
            minW="200px"
            w="25%"
            zIndex="1"
            className="frame"
            mt={["15vh", "30vh", "35vh", "35vh"]}
          />
          <Image
            src="/pictures/iphone.png"
            alt="frame"
            pos="absolute"
            minW="200px"
            w="25%"
            zIndex="3"
            className="frame"
            mt={["15vh", "30vh", "35vh", "35vh"]}
          />
        </Center>
        <Wrap
          pos="relative"
          zIndex="4"
          spacing="5"
          justify="center"
          mt={["30vh", "40vh", "40vh", "40vh"]}
        >
          <WrapItem>
            <Link
              href="https://sa.www4.irs.gov/irfof/lang/en/irfofgetstatus.jsp"
              isExternal
            >
              <Button
                mt="5"
                pos="relative"
                zIndex="5"
                color="#4e0ba5"
                p="6"
                borderRadius="full"
                height={["40px", "40px", "40px", "40px", "2.75vw"]}
                width={["225px", "225px", "225px", "225px", "15vw"]}
                fontSize={["16px", "16px", "16px", "16px", "1.15vw"]}
              // px={["8", "8", "8", "8"]}
              >
                Federal Refund Status
              </Button>
            </Link>
          </WrapItem>
          <WrapItem>
            <Link
              href="https://interactive.marylandtaxes.gov/INDIV/refundstatus/home.aspx"
              isExternal
            >
              <Button
                mt="5"
                color="#4e0ba5"
                p="6"
                borderRadius="full"
                height={["40px", "40px", "40px", "40px", "2.75vw"]}
                width={["225px", "225px", "225px", "225px", "15vw"]}
                fontSize={["16px", "16px", "16px", "16px", "1.15vw"]}
              // px={["8", "8", "8", "8"]}
              >
                Maryland Refund Status
              </Button>
            </Link>
          </WrapItem>
          <WrapItem>
            <Select
              cursor='pointer'
              textAlign='center'
              fontWeight='600'
              height={["45px", "45px", "45px", "45px", "2.75vw"]}
              fontSize={["16px", "16px", "16px", "16px", "1.15vw"]}
              color="#4e0ba5" bg='#edf2f7'
              py="5"
              borderRadius="full" borderColor='#edf2f7'
              placeholder="State Refund Status"
              onChange={(ev) =>
                ev.target.value && window.open(ev.target.value)}
            >
              <option value='https://myalabamataxes.alabama.gov/'>Alabama</option>
              <option value='https://aztaxes.gov/Home/CheckRefund'>Arizona</option>
              <option value='https://atap.arkansas.gov/'>Arkansas</option>
              <option value='https://webapp.ftb.ca.gov/refund/login?Submit=Check+refund&Lang=en-us'>California</option>
              <option value='https://www.colorado.gov/revenueonline/'>Colorado</option>
              <option value='https://drsindtax.ct.gov/AUT/refundStatus.aspx?TXPYRTYP=I'>Connecticut</option>
              <option value='https://dorweb.revenue.delaware.gov/scripts/refinq/refinq.dll'>Deleware</option>
              <option value='https://mytax.dc.gov/'>D.C</option>
              <option value='https://gtc.dor.ga.gov/'>Georgia</option>
              <option value='https://hitax.hawaii.gov/'>Hawaii</option>
              <option value='https://idahotap.gentax.com/tap/'>Idaho</option>
              <option value='https://mytax.illinois.gov/'>Illinois</option>
              <option value='https://intime.dor.in.gov/eServices/'>Indiana</option>
              <option value='https://tax.iowa.gov/wheres-my-refund'>Iowa</option>
              <option value='https://www.kdor.ks.gov/Apps/kcsc/increfundstatus.aspx'>Kansas</option>
              <option value='https://refund.ky.gov/'>Kentucky</option>
              <option value='https://latap.revenue.louisiana.gov/'>Louisiana</option>
              <option value='https://portal.maine.gov/refundstatus/refund'>Maine</option>
              <option value='https://mtc.dor.state.ma.us/mtc/'>Massachusetts</option>
              <option value='https://www.michigan.gov/taxes/iit/refund'>Michigan</option>
              <option value='https://www.revenue.state.mn.us/wheres-my-refund'>Minnesota</option>
              <option value='https://tap.dor.ms.gov/'>Mississippi</option>
              <option value='https://mytax.mo.gov/rptp/portal/home/return-tracker/!ut/p/z1/jY9PC4JAFMQ_SwevvoduJt0WEUUijTBtL7HGpob_2N38_Il1CUqa03vDbwYGGOTAOj7WJdd13_Fm-s_MucQJoaEXYBwkuMED2fu2Q30LESGbAfwhisD-yS8AbLk-AzYjtoteEKIVBenRQhrTlJxoNF3kDSx0RMDKpi9ec2lX2G4JTIqbkEKaDznZldaD2hpooGq51Fwpoc1r3xr4LVL1SkP-ScLQpjne1824o6snq7FwaA!!/dz/d5/L2dBISEvZ0FBIS9nQSEh/'>Missouri</option>
              <option value='https://tap.dor.mt.gov/'>Montana</option>
              <option value='https://revenue.nebraska.gov/individuals/refund-information'>Nebraska</option>
              <option value='https://www16.state.nj.us/TYTR_TGI_INQ/servlet/COMMON/prompt'>New Jersey</option>
              <option value='https://tap.state.nm.us/TAP/'>New Mexico</option>
              <option value='https://www.tax.ny.gov/pit/file/refund.htm'>New York</option>
              <option value='https://eservices.dor.nc.gov/wheresmyrefund/SelectionServlet'>North Carolina</option>
              <option value='https://apps.nd.gov/tax/tap/'>North Dakota</option>
              <option value='https://www.tax.state.oh.us/IFILE/WheresMyRefundWeb/wheresmyrefund.jsp'>Ohio</option>
              <option value='https://oktap.tax.ok.gov/oktap/Web/'>Oklahoma</option>
              <option value='https://revenueonline.dor.oregon.gov/tap/'>Oregon</option>
              <option value='https://www.doreservices.state.pa.us/individual/RefundDefault.htm'>Pennsylvania</option>
              <option value='https://www.ri.gov/taxation/refund/'>Rhode Island</option>
              <option value='https://mydorway.dor.sc.gov/'>South Carolina</option>
              <option value='https://tap.tax.utah.gov/TaxExpress/_/'>Utah</option>
              <option value='https://myvtax.vermont.gov/_/'>Vermont</option>
              <option value='https://www.tax.virginia.gov/wheres-my-refund'>Virginia</option>
              <option value='https://mytaxes.wvtax.gov/_/'>West Virginia</option>
              <option value='https://www.revenue.wi.gov/Pages/Apps/TaxReturnStatus.aspx'>Wisconsin</option>

            </Select>

          </WrapItem>
        </Wrap>
      </Box>
    </Box>
  );
}

export default Feature