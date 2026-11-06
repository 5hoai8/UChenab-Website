import type {Metadata} from 'next';
import localFont from 'next/font/local';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DeveloperProfileBadge from '@/components/DeveloperProfileBadge';
import DeploymentRefresh from '@/components/DeploymentRefresh';
import '@/styles/globals.css';
import '@/styles/updates-bar.css';
import '@/styles/developer-badge.css';
const cinzel=localFont({src:[{path:'../styles/fonts/Cinzel-Regular.ttf',weight:'400',style:'normal'},{path:'../styles/fonts/Cinzel-Bold.ttf',weight:'700',style:'normal'}],variable:'--font-cinzel',display:'swap'});
export const metadata:Metadata={title:{default:'The University of Chenab | Independent Website Concept',template:'%s | University of Chenab Concept'},description:'Explore verified University of Chenab study options, admissions resources and campus information. Independent website concept.',robots:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={cinzel.variable}><body id="top"><a className="skip" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/><DeveloperProfileBadge/><DeploymentRefresh/></body></html>}
