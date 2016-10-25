/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/fonts/fira/eot/FiraMono-Bold.eot","ca242c592b34dacb2a8951cda703e48c"],["/fonts/fira/eot/FiraMono-Medium.eot","a84904c48e817c10ac40126f52f72f2e"],["/fonts/fira/eot/FiraMono-Regular.eot","8d876c180eb01a79be6d1d8bc121919f"],["/fonts/fira/eot/FiraSans-Bold.eot","5b6db7a387815eea8bec2d491683a707"],["/fonts/fira/eot/FiraSans-BoldItalic.eot","fb8851fe90bb7dcd2a6b468db4a2f2f6"],["/fonts/fira/eot/FiraSans-Book.eot","52f7fd8f5d05a94077463b95b62296dd"],["/fonts/fira/eot/FiraSans-BookItalic.eot","8711e82ff78ae785366996e231f86cef"],["/fonts/fira/eot/FiraSans-Eight.eot","970eb9c2ff1f1b606b62d8bdd9d36a4e"],["/fonts/fira/eot/FiraSans-EightItalic.eot","4965fb39061d6a95769965b31b1b9af4"],["/fonts/fira/eot/FiraSans-ExtraBold.eot","ed686b36d38d7305bf0e6768005530f5"],["/fonts/fira/eot/FiraSans-ExtraBoldItalic.eot","51d15820283deb2157a2e6a5db93eb92"],["/fonts/fira/eot/FiraSans-ExtraLight.eot","e52c09f4ca4260787a98bdf00671029a"],["/fonts/fira/eot/FiraSans-ExtraLightItalic.eot","66401232a8584536df3c2f55644dc9dd"],["/fonts/fira/eot/FiraSans-Four.eot","42dad89efbf8c3dcbdbe383b03fa5e35"],["/fonts/fira/eot/FiraSans-FourItalic.eot","3d164a2f8ddd79f3b9a11ffdcdbec543"],["/fonts/fira/eot/FiraSans-Hair.eot","8813093cea1de651d2460e5c223d7d6f"],["/fonts/fira/eot/FiraSans-HairItalic.eot","2ee146117a39a92024730469c4b33e36"],["/fonts/fira/eot/FiraSans-Heavy.eot","b32dc9a468192b0402f8fbf048a23f92"],["/fonts/fira/eot/FiraSans-HeavyItalic.eot","9f05881808f07291c4c8cd74aedb4796"],["/fonts/fira/eot/FiraSans-Italic.eot","ae63929887b55a7e47a145d0d37b77fd"],["/fonts/fira/eot/FiraSans-Light.eot","d20581f8149298d49c776e9a77147860"],["/fonts/fira/eot/FiraSans-LightItalic.eot","917a72febcbc4a5cd80455045673935f"],["/fonts/fira/eot/FiraSans-Medium.eot","cdb3381ca6dbd78c96cd40196da44a9e"],["/fonts/fira/eot/FiraSans-MediumItalic.eot","eacc54cb353e7dfcd05067baf7efbca6"],["/fonts/fira/eot/FiraSans-Regular.eot","12801b91616871ee8783342abc4cd110"],["/fonts/fira/eot/FiraSans-SemiBold.eot","9d960372eb03f346a6eabb763bbfb871"],["/fonts/fira/eot/FiraSans-SemiBoldItalic.eot","5a59c8dd1cdb8bf65bfdfdff522fe35f"],["/fonts/fira/eot/FiraSans-Thin.eot","cafe5386bf262b1adbffc8d85a3c86eb"],["/fonts/fira/eot/FiraSans-ThinItalic.eot","98f6a664e38afd0e5c5496774737e25b"],["/fonts/fira/eot/FiraSans-Two.eot","bb0c474b08a5a606be9f072a8efdb2f8"],["/fonts/fira/eot/FiraSans-TwoItalic.eot","3d7240fae840331e69915600c1b4d997"],["/fonts/fira/eot/FiraSans-Ultra.eot","e8ff1d19fae6d4fffb53456eec038016"],["/fonts/fira/eot/FiraSans-UltraItalic.eot","8d1398195401bf7078bf8cfd30182db2"],["/fonts/fira/eot/FiraSans-UltraLight.eot","bbd71ede2d61e74586c241275ba0051c"],["/fonts/fira/eot/FiraSans-UltraLightItalic.eot","0deb15ab7d02377b98fcd07569743407"],["/fonts/fira/otf/FiraMono-Bold.otf","ff79a44e0feadf7ce4cf6c40b29f36f8"],["/fonts/fira/otf/FiraMono-Medium.otf","f8d5463caeff0bfedc55a14edf1859ba"],["/fonts/fira/otf/FiraMono-Regular.otf","8e9e43ef6e5669e8db226dc6a2961457"],["/fonts/fira/otf/FiraSans-Bold.otf","6b7b274cdb71fed31a3ab00827a091d6"],["/fonts/fira/otf/FiraSans-BoldItalic.otf","ff1a4e814429997d468ccf5cae66bc9f"],["/fonts/fira/otf/FiraSans-Book.otf","9e29124adafe2cc4fc881e7eaed5def6"],["/fonts/fira/otf/FiraSans-BookItalic.otf","774bbb46a64a14d157f8bb2ff15fb282"],["/fonts/fira/otf/FiraSans-Eight.otf","fd288e0d2b4881f44e4d6375b8be7ad2"],["/fonts/fira/otf/FiraSans-EightItalic.otf","9cc6329e17015e641c79b81feb429141"],["/fonts/fira/otf/FiraSans-ExtraBold.otf","f990272b514f87a7dde50bfda439036f"],["/fonts/fira/otf/FiraSans-ExtraBoldItalic.otf","a52b745600af467eeb4cbf505fc70c8e"],["/fonts/fira/otf/FiraSans-ExtraLight.otf","7c111c819173c9e340e71cb53b38f614"],["/fonts/fira/otf/FiraSans-ExtraLightItalic.otf","bcc4f71d5c0e032bbbb13e4f61aec8a2"],["/fonts/fira/otf/FiraSans-Four.otf","15301f88db6f1caa6c1b5d856b0e58c9"],["/fonts/fira/otf/FiraSans-FourItalic.otf","329f1977b820ee62c0bc66e4846d7c87"],["/fonts/fira/otf/FiraSans-Hair.otf","0669da4191410057e761bfd16826f9b5"],["/fonts/fira/otf/FiraSans-HairItalic.otf","e40d777d7beb3b70eada8bf5e3f95291"],["/fonts/fira/otf/FiraSans-Heavy.otf","ef4267472f8676897aaeb5be0a520479"],["/fonts/fira/otf/FiraSans-HeavyItalic.otf","2fe1f0b70cea02b424a3871b88593671"],["/fonts/fira/otf/FiraSans-Italic.otf","9ae15b27cb0856cac6e422932211091f"],["/fonts/fira/otf/FiraSans-Light.otf","a35b04a47658272244d456dd1cbfeb66"],["/fonts/fira/otf/FiraSans-LightItalic.otf","3e380267a8088e9c58dbcf224c9f3945"],["/fonts/fira/otf/FiraSans-Medium.otf","825e43772be29d80b02fe39500a19bee"],["/fonts/fira/otf/FiraSans-MediumItalic.otf","718bac96ea652141d2a71ca39cff056a"],["/fonts/fira/otf/FiraSans-Regular.otf","e7988865e2e32f23de6205effcc3a95d"],["/fonts/fira/otf/FiraSans-SemiBold.otf","67cf35fead4c694f9ff5b0aeace739bc"],["/fonts/fira/otf/FiraSans-SemiBoldItalic.otf","e904c88d03ab5ad3186d6b51e70b4fbe"],["/fonts/fira/otf/FiraSans-Thin.otf","67e24104f6c230f03e3287627a114f61"],["/fonts/fira/otf/FiraSans-ThinItalic.otf","77a1f120b8837770c527bf60c3a1d0d9"],["/fonts/fira/otf/FiraSans-Two.otf","c7deae98d2f4a41335667a4b7634e334"],["/fonts/fira/otf/FiraSans-TwoItalic.otf","e91dc81ea87ca40a59f5819b219be058"],["/fonts/fira/otf/FiraSans-Ultra.otf","9f476ae6949f2a1deead9739407b64c8"],["/fonts/fira/otf/FiraSans-UltraItalic.otf","bb013237bec40f286e1490aaccf1efff"],["/fonts/fira/otf/FiraSans-UltraLight.otf","40af8ad9d2e4e0e8563733dd0b4366bc"],["/fonts/fira/otf/FiraSans-UltraLightItalic.otf","ed1fe2615489d522b1be14400340401a"],["/fonts/fira/otf/FiraSansCondensed-Bold.otf","61979d64b127e9749eab00a73a16bb93"],["/fonts/fira/otf/FiraSansCondensed-BoldItalic.otf","1f4660ec8f3c62e5a881c390878760c2"],["/fonts/fira/otf/FiraSansCondensed-Book.otf","6c860fcb26ccbf39006b6bf64e7b2ce8"],["/fonts/fira/otf/FiraSansCondensed-BookItalic.otf","a2ba603f6fc47015bff042230d581f5f"],["/fonts/fira/otf/FiraSansCondensed-Eight.otf","039c3b030401ef20c97502da1e5bd2a9"],["/fonts/fira/otf/FiraSansCondensed-EightItalic.otf","8c866158502a83e0f5cc738cd6986f69"],["/fonts/fira/otf/FiraSansCondensed-ExtraBold.otf","07e2f5841089e306630f6105dc1045e9"],["/fonts/fira/otf/FiraSansCondensed-ExtraLight.otf","798bb783188b5533e8a2e11953d61aec"],["/fonts/fira/otf/FiraSansCondensed-ExtraLightItalic.otf","090cecefd00eac5673268281791fb3c7"],["/fonts/fira/otf/FiraSansCondensed-ExtraboldItalic.otf","75ec546507de951f6dfa7c78df723457"],["/fonts/fira/otf/FiraSansCondensed-Four.otf","4c469eba715458a540c6f198012adf5a"],["/fonts/fira/otf/FiraSansCondensed-FourItalic.otf","ab4ae1647fe3b11f3290804bd9b19604"],["/fonts/fira/otf/FiraSansCondensed-Hair.otf","de195427b817ef6de9c9aababa19ca55"],["/fonts/fira/otf/FiraSansCondensed-HairItalic.otf","f8aaf3c62ee32d74700ba8be2fc34577"],["/fonts/fira/otf/FiraSansCondensed-Heavy.otf","ebbacba1aaf53632f249258d65f74bdb"],["/fonts/fira/otf/FiraSansCondensed-HeavyItalic.otf","da6598433a75a3d76ec07afec74a0a97"],["/fonts/fira/otf/FiraSansCondensed-Italic.otf","b56771d6e78322a63abe98ca33516c21"],["/fonts/fira/otf/FiraSansCondensed-Light.otf","2679c34c75f34c60f9bc8aaad524193d"],["/fonts/fira/otf/FiraSansCondensed-LightItalic.otf","68d1f8a0322b9f0a46d49d43a529a574"],["/fonts/fira/otf/FiraSansCondensed-Medium.otf","e83a7c70c51720c74f2aa17ac76cebdf"],["/fonts/fira/otf/FiraSansCondensed-MediumItalic.otf","1277b4994d9115fd30ac4ecf32f68e7f"],["/fonts/fira/otf/FiraSansCondensed-Regular.otf","4c6e06503a9487e2bff145cf4949853c"],["/fonts/fira/otf/FiraSansCondensed-SemiBold.otf","511c1b633b9b325964c3465e60b6060f"],["/fonts/fira/otf/FiraSansCondensed-SemiboldItalic.otf","678797935e5eec5fe15f5411414459ed"],["/fonts/fira/otf/FiraSansCondensed-Thin.otf","bb5d59dd7906b4768ef5bd12d2396590"],["/fonts/fira/otf/FiraSansCondensed-ThinItalic.otf","41b3615b7e78b8a5f8060ae2285acf93"],["/fonts/fira/otf/FiraSansCondensed-Two.otf","d0afdbc79bb879ada6160e8fb3fb5951"],["/fonts/fira/otf/FiraSansCondensed-TwoItalic.otf","515442f29fa359653f73d115e2b496c6"],["/fonts/fira/otf/FiraSansCondensed-Ultra.otf","6e7b3c87f657fa697b3e11057c18f670"],["/fonts/fira/otf/FiraSansCondensed-UltraItalic.otf","adafbc4473c15dbe0af52e8db4aeea18"],["/fonts/fira/otf/FiraSansCondensed-UltraLight.otf","b9d9fd449b186e36af7dcdf22dd7de5a"],["/fonts/fira/otf/FiraSansCondensed-UltraLightItalic.otf","44553542688be297b353120f2bab153c"],["/fonts/fira/ttf/FiraMono-Bold.ttf","abbe89bd522af0765f67d19bbef382bd"],["/fonts/fira/ttf/FiraMono-Medium.ttf","5a5afe3541d5456462a0bcb346fab34d"],["/fonts/fira/ttf/FiraMono-Regular.ttf","d616f619c088ed9428d76343a2c6b2ed"],["/fonts/fira/ttf/FiraSans-Bold.ttf","6028e19089deb3cf7a60d0d00e4638ba"],["/fonts/fira/ttf/FiraSans-BoldItalic.ttf","e52a31177b297691a585c49bd4731452"],["/fonts/fira/ttf/FiraSans-Book.ttf","8507ff266cbf9e610b925669235c8ac5"],["/fonts/fira/ttf/FiraSans-BookItalic.ttf","f173823151e6bc79814366091551cf61"],["/fonts/fira/ttf/FiraSans-Eight.ttf","4f49a1a14fac6f700061c5e193771ef2"],["/fonts/fira/ttf/FiraSans-EightItalic.ttf","cc15bf13cdb7b6fa55fa9a221cf7418f"],["/fonts/fira/ttf/FiraSans-ExtraBold.ttf","e836b60c5959654ce369b4ddee002320"],["/fonts/fira/ttf/FiraSans-ExtraBoldItalic.ttf","80d6fdbbd2a6efa1e8a41cfd19a7aaa1"],["/fonts/fira/ttf/FiraSans-ExtraLight.ttf","4aebf82bbcd92c831be8486d7bf092e0"],["/fonts/fira/ttf/FiraSans-ExtraLightItalic.ttf","64566157c83e9f46ac7a6452dc7f7d3b"],["/fonts/fira/ttf/FiraSans-Four.ttf","58be8e0fb351cf264961679304061a95"],["/fonts/fira/ttf/FiraSans-FourItalic.ttf","9f874a939f5714b8566ab2a4e52f94af"],["/fonts/fira/ttf/FiraSans-Hair.ttf","530647d74ec136702e5dbd60b854b3a8"],["/fonts/fira/ttf/FiraSans-HairItalic.ttf","416fcb12f11ebe751538deeed6d7885d"],["/fonts/fira/ttf/FiraSans-Heavy.ttf","bfa8d731eb16203d69c895c02997a13f"],["/fonts/fira/ttf/FiraSans-HeavyItalic.ttf","2eb742f29e5fed7087f1fcfccfaed49e"],["/fonts/fira/ttf/FiraSans-Italic.ttf","a4fef367e83f653c1e0eb6c122338adb"],["/fonts/fira/ttf/FiraSans-Light.ttf","271c6d46b715703ad05e20e270a5f7e8"],["/fonts/fira/ttf/FiraSans-LightItalic.ttf","cbbb2042d64920e9d2ae8fec84c904a8"],["/fonts/fira/ttf/FiraSans-Medium.ttf","54b83b537f536ffab4528d8a635f865d"],["/fonts/fira/ttf/FiraSans-MediumItalic.ttf","2b70d3d73007e2afa7325cc211ca7efc"],["/fonts/fira/ttf/FiraSans-Regular.ttf","b0aa1958e34c16cede8af5643a9c285c"],["/fonts/fira/ttf/FiraSans-SemiBold.ttf","a40c65276c46be222b4d7180e96b728c"],["/fonts/fira/ttf/FiraSans-SemiBoldItalic.ttf","88a3623bc30ef02a023bd212e6a6c1ec"],["/fonts/fira/ttf/FiraSans-Thin.ttf","d56a90660a25e3f62d7d9469bcddbf21"],["/fonts/fira/ttf/FiraSans-ThinItalic.ttf","76a4427c3133fd135a1c79e10845abc0"],["/fonts/fira/ttf/FiraSans-Two.ttf","7759a082d6cbeef29752bb48fb2a6915"],["/fonts/fira/ttf/FiraSans-TwoItalic.ttf","ca710005d29b7ad1f9896d06d16bcd33"],["/fonts/fira/ttf/FiraSans-Ultra.ttf","14f6eff31bf9566ed69d7af90bf49810"],["/fonts/fira/ttf/FiraSans-UltraItalic.ttf","b104259572e6fc78a2ef82851e507a94"],["/fonts/fira/ttf/FiraSans-UltraLight.ttf","2a810c8dd8a9dd7307489c13c1e20b5d"],["/fonts/fira/ttf/FiraSans-UltraLightItalic.ttf","273a1aab041818d0cd00cd888d8b5128"],["/fonts/fira/woff/FiraMono-Bold.woff","ea0cfb9b88c1398f840eae350e12d924"],["/fonts/fira/woff/FiraMono-Medium.woff","668f7305bbba27d5d2a7fd430b753bde"],["/fonts/fira/woff/FiraMono-Regular.woff","f25e0dfc5b508f34f63724d7ff607384"],["/fonts/fira/woff/FiraSans-Bold.woff","bf0aaa9c4657f053f06bef1e50208e9f"],["/fonts/fira/woff/FiraSans-BoldItalic.woff","215cae1e77b2c4818f7e058850d3265b"],["/fonts/fira/woff/FiraSans-Book.woff","6d4e4a157b0e2cdd3e579cab5c1fcd4e"],["/fonts/fira/woff/FiraSans-BookItalic.woff","40e82ed3953f7587634f2c367270f141"],["/fonts/fira/woff/FiraSans-Eight.woff","a7cb7b1efeb62cf79edb5afd48c900b3"],["/fonts/fira/woff/FiraSans-EightItalic.woff","0b083fa7d917f4d3da5bf2b9341b3fa8"],["/fonts/fira/woff/FiraSans-ExtraBold.woff","febbf576b10607917495a54416197ab2"],["/fonts/fira/woff/FiraSans-ExtraBoldItalic.woff","ec49252c8f3b7d570fa0ce856380081e"],["/fonts/fira/woff/FiraSans-ExtraLight.woff","43e2b54db01704dfa2c65a0e2b4ddd7d"],["/fonts/fira/woff/FiraSans-ExtraLightItalic.woff","b8c21ebb7c9c240fccd943a5da3c1428"],["/fonts/fira/woff/FiraSans-Four.woff","a5645e83be57f2925d7aadca64ec8088"],["/fonts/fira/woff/FiraSans-FourItalic.woff","15f66dbbacd23a92bf6e12bddb0667d1"],["/fonts/fira/woff/FiraSans-Hair.woff","1ebbe78b20755c4b6168051faa72fe27"],["/fonts/fira/woff/FiraSans-HairItalic.woff","73a3b963db4802956cdb337555397540"],["/fonts/fira/woff/FiraSans-Heavy.woff","da342f62c520818b80be7cb117a9d1d1"],["/fonts/fira/woff/FiraSans-HeavyItalic.woff","16b2c19cad569508bf53901b084d4738"],["/fonts/fira/woff/FiraSans-Italic.woff","9a74216339d8a17b8498820e5245d4c0"],["/fonts/fira/woff/FiraSans-Light.woff","29430787e85c5dc0a9e8a164fab4a5bf"],["/fonts/fira/woff/FiraSans-LightItalic.woff","860c08c400da08cf7a44142c0866aafe"],["/fonts/fira/woff/FiraSans-Medium.woff","181fa5a2e6e9b5730eb6fe46c30b5228"],["/fonts/fira/woff/FiraSans-MediumItalic.woff","965651ed4d6b21593be02b7b27c41a4a"],["/fonts/fira/woff/FiraSans-Regular.woff","200d5e7cc951bbffda6945f883e3123e"],["/fonts/fira/woff/FiraSans-SemiBold.woff","defc482e83c81d8844cd30c0f5882129"],["/fonts/fira/woff/FiraSans-SemiBoldItalic.woff","561d7ca60c5b2f9e67bf938c1f0b1c41"],["/fonts/fira/woff/FiraSans-Thin.woff","22f3d51e6180b9125547f99f740db500"],["/fonts/fira/woff/FiraSans-ThinItalic.woff","5be73fadaff20b5e4d1d141596c431e4"],["/fonts/fira/woff/FiraSans-Two.woff","f22d51cb6cfe71c215eade737ad703bc"],["/fonts/fira/woff/FiraSans-TwoItalic.woff","77b439e91011ac706f9bd55b81eb2cc9"],["/fonts/fira/woff/FiraSans-Ultra.woff","f934ae02789d8171f46e9483debd4a8a"],["/fonts/fira/woff/FiraSans-UltraItalic.woff","1109d1526d182859a0958a99b93a3e99"],["/fonts/fira/woff/FiraSans-UltraLight.woff","3f956e0089da4ef85a8ccf7e334aa9f8"],["/fonts/fira/woff/FiraSans-UltraLightItalic.woff","119e1bbcab7a10cd1e2d7588efc95097"],["/fonts/fira/woff2/FiraMono-Bold.woff2","3bfe927e68ca363b4bfe0ac016509cb9"],["/fonts/fira/woff2/FiraMono-Medium.woff2","1e059e16598f0efef2db9f5ee691f747"],["/fonts/fira/woff2/FiraMono-Regular.woff2","fe92bd266274aa44e22e48ca0317ff98"],["/fonts/fira/woff2/FiraSans-Bold.woff2","a1ea7f348ffcb1af730d8bb90d6c7792"],["/fonts/fira/woff2/FiraSans-BoldItalic.woff2","2b8fee7c129fcad1c9014f69ccddc4a5"],["/fonts/fira/woff2/FiraSans-Book.woff2","015c364accd6d840b3cce28990e57887"],["/fonts/fira/woff2/FiraSans-BookItalic.woff2","896c2e08e0a6bc53238cea58ab22e6df"],["/fonts/fira/woff2/FiraSans-Eight.woff2","c0b8f1c35284dcd0b58a8ffc5038f905"],["/fonts/fira/woff2/FiraSans-EightItalic.woff2","ec3d3241c7a1425024485fb109f2c44e"],["/fonts/fira/woff2/FiraSans-ExtraBold.woff2","f89199263dbe801b7a00806305f77ae7"],["/fonts/fira/woff2/FiraSans-ExtraBoldItalic.woff2","af43bfab7855b7c73d8fdae1bd4f85c2"],["/fonts/fira/woff2/FiraSans-ExtraLight.woff2","4876fd3381088901b7c44ec407b10d6e"],["/fonts/fira/woff2/FiraSans-ExtraLightItalic.woff2","d9e8bded0a76544136110b575a4c49ad"],["/fonts/fira/woff2/FiraSans-Four.woff2","b75060e6f934a754231b0f51a10644e9"],["/fonts/fira/woff2/FiraSans-FourItalic.woff2","1a85bbb24ba27884e99056e8593f3889"],["/fonts/fira/woff2/FiraSans-Hair.woff2","0ebb27b22d9e08b8d747d5a37d5de076"],["/fonts/fira/woff2/FiraSans-HairItalic.woff2","51ce1834ac5d8608ca9fc792454a13c0"],["/fonts/fira/woff2/FiraSans-Heavy.woff2","ca7165abe4df5164b241dbe73ffd2b1f"],["/fonts/fira/woff2/FiraSans-HeavyItalic.woff2","1309e803208dbb06b2ff112fc6299048"],["/fonts/fira/woff2/FiraSans-Italic.woff2","6d9f3ebf6789c130bb19b2d5efcb87b3"],["/fonts/fira/woff2/FiraSans-Light.woff2","af42317212d492ac0f5ffabd918b8493"],["/fonts/fira/woff2/FiraSans-LightItalic.woff2","58bf65077b5c26c708a53e4e63cc55e5"],["/fonts/fira/woff2/FiraSans-Medium.woff2","0eff19a04ae3b96909f34d747d538642"],["/fonts/fira/woff2/FiraSans-MediumItalic.woff2","a4b5655f2fdbe07f1fe26d5a77ab79a9"],["/fonts/fira/woff2/FiraSans-Regular.woff2","979a13914c3398f40c3114ead422ed41"],["/fonts/fira/woff2/FiraSans-SemiBold.woff2","cd42623b2eef6e53392fb43c9b3273be"],["/fonts/fira/woff2/FiraSans-SemiBoldItalic.woff2","09d298c71fbee7cd409f7aa310056c7d"],["/fonts/fira/woff2/FiraSans-Thin.woff2","c820a3ed5d0615ef78fcbd9045f1210b"],["/fonts/fira/woff2/FiraSans-ThinItalic.woff2","06260c3bb467fb8f555cc997fd4f2f71"],["/fonts/fira/woff2/FiraSans-Two.woff2","8839be900d02c922f23149d8f2017996"],["/fonts/fira/woff2/FiraSans-TwoItalic.woff2","3d12f788f09124a9b346db7454f80c6b"],["/fonts/fira/woff2/FiraSans-Ultra.woff2","e63390f2a0026ad8d8a9e6cca3769a3e"],["/fonts/fira/woff2/FiraSans-UltraItalic.woff2","30ea57d92bf367f8e92a5087340ecc63"],["/fonts/fira/woff2/FiraSans-UltraLight.woff2","1ca80810b4032c4be10296837e22c022"],["/fonts/fira/woff2/FiraSans-UltraLightItalic.woff2","716409e7f8b1165315bfea9319f95ba0"],["/images/aframe-logo.png","4d586a825c27d4b0e56872a1a14ad82c"],["/images/aframe-video-thumbnail.png","a192042984071d3b7023c5e0ba924901"],["/images/aframe-wordmark.png","19cfdfffcfef92ac9b891c5adf9d1a40"],["/images/github-icon.svg","6856557e05a6a471a0b147af3b6a6509"],["/images/menu.png","ca8f9182696a140328ebdc8124230a60"],["/js/common.js","ad07ed14943c4292a2c5ef910b999d0c"],["/js/compat.js","390e71e660a76c0b394184e7b06efd7f"],["/js/docs.js","789ba79c85e64329f011557b4b8b5f3a"],["/js/examples.js","917ac49077ea17bf62d630365114068e"],["/js/ga.js","c36289e3c73f73234172a8d22e60b9cd"],["/js/single-page.js","338d91ef92754b4d55a3925e7c3d21ca"]];
var cacheName = 'sw-precache-v2--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {credentials: 'same-origin'}));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







