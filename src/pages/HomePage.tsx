import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import ava from "@/assets/gon .jpeg";
import ava2 from "@/assets/killua.jpeg";

import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <h1 className="pb-4 flex justify-center items-center text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        Developer Log
      </h1>
      <div className="flex justify-center items-center  bg-gray-100 p-4">
        {/* Centered Card Container */}
        <div className="flex items-stretch space-x-8">
          <Card className={cn("w-[380px]")}>
            <CardHeader>
              <CardTitle className="flex justify-center items-center">
                <Avatar>
                  <AvatarImage src={ava} alt="AVA" />
                  <AvatarFallback>Dev</AvatarFallback>
                </Avatar>
              </CardTitle>
              <CardDescription className="flex justify-center items-center">
                Freddy Rios
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>
                Card Footer djlajl;adj;ljfdas;ljda;sljk;dsj;dlsaja;sdj
                asljfd;alsjdal;sjfdas;jdfa;ldsaj;dsaljafs asjfdal;dsakj aj
                assfjds akad;j ad;jdas;ljdfa;sjajda;jdfaajfd'ldaskj
                alsajf;dlsaj;asja;oijfdl;jasj
              </p>
            </CardFooter>
          </Card>
          {/* Separator */}
          <div className="w-1 bg-gray-300"></div>{" "}
          {/* Adjusted width for more space */}
          <Card className={cn("w-[380px]")}>
            <CardHeader>
              <CardTitle className="flex justify-center items-center">
                <Avatar>
                  <AvatarImage src={ava2} alt="AVA" />
                  <AvatarFallback>Dev</AvatarFallback>
                </Avatar>
              </CardTitle>
              <CardDescription className="flex justify-center items-center">
                Ben Cha
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>
                Card Footer djlajl;adj;ljfdas;ljda;sljk;dsj;dlsaja;sdj
                asljfd;alsjdal;sjfdas;jdfa;ldsaj;dsaljafs asjfdal;dsakj aj
                assfjds akad;j ad;jdas;ljdfa;sjajda;jdfaajfd'ldaskj
                alsajf;dlsaj;asja;oijfdl;jasj
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
      {/* projects section */}
      <div>
        <h2 className="pt-2 pl-3 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Projcts
        </h2>
        <p className="pl-2">
          hello this it is a test sdkjf;ajkjfldsja;jdaks;kjsdoifj;ai jwelkjw fj
          lkawf ;jwoawfej kjlk jkl jafj j jf jf jfoi eje;ekalj;djk s; s fjf ksdj
          ;safljffj kldj;lkjsdfoiwej jflkj fjf joiwjeoifjlsk djlkjf
          o;wjfeijaowfnk fjlakejhlaiheuflasdhfliaw efhiuvhfd hialufejk; hello
          this it is a test sdkjf;ajkjfldsja;jdaks;kjsdoifj;ai jwelkjw fj lkawf
          ;jwoawfej kjlk jkl jafj j jf jf jfoi eje;ekalj;djk s; s fjf ksdj
          ;safljffj kldj;lkjsdfoiwej jflkj fjf joiwjeoifjlsk djlkjf
          o;wjfeijaowfnk fjlakejhlaiheuflasdhfliaw efhiuvhfd hialufejk; hello
          this it is a test sdkjf;ajkjfldsja;jdaks;kjsdoifj;ai jwelkjw fj lkawf
          ;jwoawfej kjlk jkl jafj j jf jf jfoi eje;ekalj;djk s; s fjf ksdj
          ;safljffj kldj;lkjsdfoiwej jflkj fjf joiwjeoifjlsk djlkjf
          o;wjfeijaowfnk fjlakejhlaiheuflasdhfliaw efhiuvhfd hialufejk;
        </p>
      </div>
    </>
  );
}
