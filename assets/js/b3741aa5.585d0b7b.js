"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={title:"Substrate",slug:"/integrations/substrate"},i="Substrate Integration",o={unversionedId:"integrations/substrate",id:"integrations/substrate",title:"Substrate",description:"GitHub Repository",source:"@site/docs/integrations/substrate.mdx",sourceDirName:"integrations",slug:"/integrations/substrate",permalink:"/integrations/substrate",draft:!1,editUrl:"https://github.com/acurast/acurast-docs/docs/integrations/substrate.mdx",tags:[],version:"current",frontMatter:{title:"Substrate",slug:"/integrations/substrate"},sidebar:"docs",previous:{title:"Introduction",permalink:"/integrations/introduction"},next:{title:"Substrate With EVM",permalink:"/integrations/substrate-evm"}},u={},s=[{value:"Introduction",id:"introduction",level:3},{value:"fulfill",id:"fulfill",level:4},{value:"Parachain Integration",id:"parachain-integration",level:3},{value:"P256 crypto",id:"p256-crypto",level:2},{value:"Setup",id:"setup",level:3},{value:"Integration",id:"integration",level:3},{value:"Acurast Proxy Pallet",id:"acurast-proxy-pallet",level:2},{value:"Introduction",id:"introduction-1",level:3},{value:"register",id:"register",level:4},{value:"deregister",id:"deregister",level:4},{value:"updateAllowedSources",id:"updateallowedsources",level:4},{value:"fulfill",id:"fulfill-1",level:4},{value:"Setup",id:"setup-1",level:3},{value:"Parachain Integration",id:"parachain-integration-1",level:3}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"substrate-integration"},"Substrate Integration"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Acurast/acurast-core"},"GitHub Repository")),(0,r.kt)("p",null,"The Acurast Receiver Pallet allows a Substrate based chain to integrate the Acurast functionality to be able to securly receive real world data posted by the Acurast Transmitters."),(0,r.kt)("h3",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The Acurast Fullfilment Receiver Pallet, in combination with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Acurast/acurast-core/tree/main/p256-crypto"},"Acurast P256 crypto")," package, allows a Parachain to accepts direct fulfillments from Acurast Processors."),(0,r.kt)("p",null,"The Pallet exposes one extrinsic."),(0,r.kt)("h4",{id:"fulfill"},"fulfill"),(0,r.kt)("p",null,"Allows to post the ","[Fulfillment]"," of a job. The fulfillment structure consists of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ipfs url of the ",(0,r.kt)("inlineCode",{parentName:"li"},"script")," executed."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"payload")," bytes representing the output of the ",(0,r.kt)("inlineCode",{parentName:"li"},"script"),".")),(0,r.kt)("h3",{id:"parachain-integration"},"Parachain Integration"),(0,r.kt)("p",null,"Implement ",(0,r.kt)("inlineCode",{parentName:"p"},"pallet_acurast_fulfillment_receiver::Config")," for your ",(0,r.kt)("inlineCode",{parentName:"p"},"Runtime")," and add the Pallet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"frame_support::construct_runtime!(\n    pub enum Runtime where\n        Block = Block,\n        NodeBlock = Block,\n        UncheckedExtrinsic = UncheckedExtrinsic,\n    {\n        System: frame_system::{Pallet, Call, Config, Storage, Event<T>} = 0,\n        AcurastFulfillmentReceiver: crate::{Pallet, Call, Event<T>}\n    }\n);\n\nimpl pallet_acurast_fulfillment_receiver::Config for Runtime {\n    type Event = Event;\n    type OnFulfillment = FulfillmentHandler;\n    type WeightInfo = ();\n}\n\npub struct FulfillmentHandler;\nimpl OnFulfillment<Runtime> for FulfillmentHandler {\n    fn on_fulfillment(\n        from: <Runtime as frame_system::Config>::AccountId,\n        _fulfillment: pallet_acurast_fulfillment_receiver::Fulfillment,\n    ) -> sp_runtime::DispatchResultWithInfo<frame_support::weights::PostDispatchInfo> {\n        /// check if origin is a valid Acurast Processor AccountId\n        if !is_valid(&from) {\n            return Err(DispatchError::BadOrigin.into());\n        }\n        /// if valid, then fulfillment can be used\n        Ok(().into())\n    }\n}\n")),(0,r.kt)("p",null,"Provide and implementation of ","[OnFulfillment]"," to handle the received fulfillment. The implementation should check that the fulfillment is from a known Acurast Processor account id."),(0,r.kt)("h2",{id:"p256-crypto"},"P256 crypto"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Acurast/acurast-core/tree/main/p256-crypto"},"GitHub Repository")),(0,r.kt)("p",null,"This crate provides types that allow to add P256 (a.k.a secp256r1) signature verification support to substrate based chains."),(0,r.kt)("h3",{id:"setup"},"Setup"),(0,r.kt)("p",null,"Add the following dependency to your Cargo manifest:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nacurast-p256-crypto = { git = "https://github.com/Acurast/acurast-core.git" }\n')),(0,r.kt)("h3",{id:"integration"},"Integration"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"acurast_p256_crypto::MultiSignature")," as your parachain ",(0,r.kt)("inlineCode",{parentName:"p"},"Signature")," type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use acurast_p256_crypto::MultiSignature;\n\npub type Signature = MultiSignature;\npub type AccountId = <<Signature as Verify>::Signer as IdentifyAccount>::AccountId;\n...\n\nimpl frame_system::Config for Runtime {\n    type AccountId = AccountId;\n    ...\n}\n")),(0,r.kt)("h2",{id:"acurast-proxy-pallet"},"Acurast Proxy Pallet"),(0,r.kt)("p",null,"The Acurast Proxy Pallet is an additional feature and not needed to be implemented yet without the Acurast Marketplace being live on it's own Parachain."),(0,r.kt)("p",null,"The Pallet is meant to be integrated by other parachains to interact with the Acurast parachain and the marketplace."),(0,r.kt)("h3",{id:"introduction-1"},"Introduction"),(0,r.kt)("p",null,"The Acurast Proxy pallet serves to call the extrinsics of the main pallet on the acurast parachain, from any other parachain.\nIt uses the XCMP protocol and XCM format for transmitting and interpreting messages."),(0,r.kt)("h4",{id:"register"},"register"),(0,r.kt)("p",null,"Allows the registration of a job. A registration consists of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An ipfs URL to a ",(0,r.kt)("inlineCode",{parentName:"li"},"script")," (written in Javascript).",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The script will be run in the Acurast Trusted Virtual Machine that uses a Trusted Execution Environment (TEE) on the Acurast Data Transmitter."))),(0,r.kt)("li",{parentName:"ul"},"An optional ",(0,r.kt)("inlineCode",{parentName:"li"},"allowedSources")," list of allowed sources.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A list of ",(0,r.kt)("inlineCode",{parentName:"li"},"AccountId"),"s that are allowed to ",(0,r.kt)("inlineCode",{parentName:"li"},"fulfill")," the job. If no list is provided, all sources are accepted."))),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("inlineCode",{parentName:"li"},"allowOnlyVerifiedSources")," boolean indicating if only verified source can fulfill the job.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A verified source is one that has provided a valid key attestation."))),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("inlineCode",{parentName:"li"},"extra")," structure that can be used to provide custom parameters.")),(0,r.kt)("p",null,"Registrations are saved per ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountId")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"script"),", meaning that ",(0,r.kt)("inlineCode",{parentName:"p"},"register")," is called twice from the same ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountId")," with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"script")," value, the previous registration is overwritten."),(0,r.kt)("h4",{id:"deregister"},"deregister"),(0,r.kt)("p",null,"Allows the de-registration of a job."),(0,r.kt)("h4",{id:"updateallowedsources"},"updateAllowedSources"),(0,r.kt)("p",null,"Allows to update the list of allowed sources for a previously registered job."),(0,r.kt)("h4",{id:"fulfill-1"},"fulfill"),(0,r.kt)("p",null,"Allows to post the fulfillment of a registered job. The fulfillment structure consists of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ipfs url of the ",(0,r.kt)("inlineCode",{parentName:"li"},"script")," executed."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"payload")," bytes representing the output of the ",(0,r.kt)("inlineCode",{parentName:"li"},"script"),".")),(0,r.kt)("p",null,"In addition to the ",(0,r.kt)("inlineCode",{parentName:"p"},"fulfillment")," structure, ",(0,r.kt)("inlineCode",{parentName:"p"},"fulfill")," expects the ",(0,r.kt)("inlineCode",{parentName:"p"},"AccountId")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"requester")," of the job."),(0,r.kt)("h3",{id:"setup-1"},"Setup"),(0,r.kt)("p",null,"Add the following dependency to your Cargo manifest:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\nacurast-proxy = { git = "https://github.com/Acurast/acurast-core", default-features = false, branch = "feat/proxy-pallet" }\n')),(0,r.kt)("h3",{id:"parachain-integration-1"},"Parachain Integration"),(0,r.kt)("p",null,"To integrate the acurast proxy in a parachain, there is some runtime setup needed. First we need to add the pallet to\nthe ",(0,r.kt)("a",{parentName:"p",href:"https:://example.com"},"construct_runtime")," macro as following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"construct_runtime!(\n    pub enum Runtime where\n        Block = Block,\n        NodeBlock = opaque::Block,\n        UncheckedExtrinsic = UncheckedExtrinsic,\n    {\n        System: frame_system::{Pallet, Call, Config, Storage, Event<T>} = 0,\n\n        ...\n\n        AcurastProxy: acurast_proxy::{Pallet, Call, Event<T>} = 34,\n\n    }\n);\n")),(0,r.kt)("p",null,"Then we have to add some parameter types to be used in the pallet config. Specifically the pallet id of the marketplace\npallet and the parachain id of acurast parachain. The parachain id is used to route correctly the xcm messages from cumulus\nto acurast. The pallet id is needed to properly encode the call that we want to execute into the xcm message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"parameter_types! {\n    pub const AcurastParachainId: u32 = 2000;\n    pub const AcurastPalletId: u8 = 41;\n}\n")),(0,r.kt)("p",null,'the parachain id should be found in the chainspec of acurast, and the pallet id in the definition inside the construct_runtime macro\n(e.g "ExamplePallet: pallet_example = 42" would mean the pallet id is 42)'),(0,r.kt)("p",null,"Lastly we need to configure the pallet with the parameter types defined before, and some default values like Event and ().\nThe XcmRouter is defined in xcm_config, and we are also using the default one, but whoever integrates this pallet should\nmake sure that the router is able to send XCMP messages."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"impl acurast_proxy::Config for Runtime {\n    type Event = Event;\n    type AcurastParachainId = AcurastParachainId;\n    type AcurastPalletId = AcurastPalletId;\n    type XcmSender = XcmRouter;\n    type RegistrationExtra = JobRequirements<AcurastAsset>;\n}\n")))}p.isMDXComponent=!0}}]);