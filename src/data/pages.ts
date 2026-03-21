import { expandPageSources } from '../features/pages/expandPageSources';
import type { ArgPage, ArgPageSource } from '../types/page';

// Edit `body` with normal line breaks.
// If a page changes by phase, add `phaseVariants` inside the same block.
export const pageSources: ArgPageSource[] = [
  {
    id: "36517",
    slug: "inquiry",
    path: "/inquiry-36517",
    title: "澄のことを探している",
    body: `榊原澄と最後に連絡を取ったのは9月の初めだった。それから3ヶ月近く、既読すらつかない。LINEはもう繋がっていないのかもしれない。

最初の1週間は、忙しいのかと思って待っていた。2週間経っても返事がないから、共通の友人たちに片っ端から連絡した。でも誰も最近会っていないと言う。Instagramの更新も止まっている。TwitterもTikTokも、最後の投稿のままだ。

澄が去年から通っていた場所のことが頭から離れない。名前は聞いたことがあったけど、私には関係のない話だと思って気にしていなかった。何かの集まりというか、宗教みたいなものだと思う。最初は「いい人たちで楽しいよ」って言っていたし、澄が楽しそうなら別にいいかと思ってた。でも、そこに通い始めてから少しずつ澄が変わっていった気がする。連絡の頻度が落ちて、会っても何か上の空で、「最近どう？」と聞くと「大丈夫」とだけ返ってきた。

警察には相談したけど、大人だし自分の意志で行動しているなら対応できないと言われた。家族にも連絡したけど、澄のご両親もここ数ヶ月会えていないと言っていた。

8月のやり取りを読み返していたら、気になる場面を見つけた。澄が何かを言いかけて、すぐに「なんでもない、忘れて」と打ち消してきた。知らない名前が出てきたけど、そのときは深く考えなかった。あの宗教のサイトを確認しようとしたら、前と内容が変わっているような気がして、ますます不安になった。そのときのやり取りを貼っておく。

榊原澄のことを知っている人、または澄がどうなったのかわかるページがあれば、コメント欄にURLを貼ってほしい。どんな小さな手がかりでもいい。
`,
    pageType: "ブログ",
    siteType: "blog",
    overview: "このゲームの入り口。一般的なブログ構成でコメント欄を持つ。",
    phaseLabel: "Phase0",
    phaseOrder: 0,
    phaseIndex: 1,
    pageIdRaw: "Phase0",
    searchWords: [],
    imagePrompts: [],
    images: ['/images/line-screenshot.png'],
    isSearchVisible: false,
    isPhaseBadgeVisible: true,
  },
  {
    id: "61554",
    slug: "top",
    path: "/top-61554",
    title: "TOP",
    body: ``,
    pageType: "HP",
    siteType: "main",
    overview: "一般的な宗教団体HPのトップページ",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 1,
    pageIdRaw: "Phase1(1)",
    searchWords: ["TOP","TOPページ","トップページ","福音継承教育会","福音継承","教育会"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "91509",
    slug: "about",
    path: "/about-91509",
    title: "福音継承教育会とは",
    body: `団体理念

福音継承教育会は、子どもたちの健やかな成長と、地域に根ざした学びの営みを大切にする教育共同体です。
学びとは知識の習得にとどまらず、人との関わりの中で思いやりや落ち着きを育み、自らの歩みを整えていく営みであると考え、一人ひとりを尊重しながら安心して学べる環境を育てることを理念としています。

設立目的

当会は、家庭・地域・共同体のつながりを大切にしながら、次代を担う子どもたちの学びと育ちを支えることを目的として設立されました。
学びの土台となる姿勢や習慣、思いやりの力を、地域や共同体のなかでともに支え合いながら丁寧に育てていくことを、設立以来の目的としています。

活動内容

子ども向けの学びの会、保護者・地域の方を対象とした講話会、季節ごとの集まりや交流行事など、幅広い世代がともに学び合える機会を設けています。
はじめての方にも親しみやすい内容を心がけ、日常の営みの中へ学びを自然に広げていけるよう努めています。

教育方針

当会が重視するのは、話を聞くこと、自分のことばで考えること、相手を思いやること、生活の習慣を整えることなど、学びの土台となる力を育てることです。
子どもたちが安心して過ごせる環境の中で、周囲とのつながりを感じながら成長していけるよう、年齢や状況に応じた支えを続けてまいります。
`,
    pageType: "HP",
    siteType: "main",
    overview: "メニュー「福音継承教育会とは」から遷移する",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 2,
    pageIdRaw: "Phase1(2)",
    searchWords: ["福音継承教育会","福音継承教育会とは","団体理念","設立目的","活動内容","教育方針"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "03272",
    slug: "spring-meeting",
    path: "/spring-meeting-03272",
    title: "春季感謝集会",
    body: `春季感謝集会は、新たな年度の始まりにあたり、日々の学びと支えへの感謝を分かち合うための集まりです。
季節に寄せた講話と参加者同士の交流の時間を設けており、小さなお子さまから大人の方まで無理なく参加いただけます。

春という節目に、感謝の気持ちや日々を丁寧に重ねる大切さをあらためて見つめ直す機会として、ご家族でも、おひとりでも、どうぞ安心してお越しください。
`,
    pageType: "HP",
    siteType: "main",
    overview: "メニュー「定例行事のご案内」から遷移する",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 3,
    pageIdRaw: "Phase1(3)",
    searchWords: ["春季感謝集会","定例行事"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "65750",
    slug: "beginners-circle",
    path: "/beginners-circle-65750",
    title: "初等導きの会",
    body: `初等導きの会は、子どもたちが安心して学びに親しみ、日々の生活の中で大切にしたい姿勢を育むことを目的とした集まりです。
読み聞かせや簡単な学習活動、交流の時間を通じて、年齢に応じた学びの機会を提供しています。
はじめて参加されるご家庭にも分かりやすい内容となっておりますので、どうぞ安心してご参加ください。
`,
    pageType: "HP",
    siteType: "main",
    overview: "メニュー「定例行事のご案内」から遷移する",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 4,
    pageIdRaw: "Phase1(4)",
    searchWords: ["初等導きの会","定例行事"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "96617",
    slug: "lecture-series",
    path: "/lecture-series-96617",
    title: "継承講話会",
    body: `継承講話会は、子どもたちの学びや成長を支えるうえで大切にしたい考え方を、参加者の皆さまと共有するための講話の場です。
日常の中で実践しやすい話題を中心に、家庭での声かけやことばの受け渡し、学びの土台のつくり方などを取り上げます。

講話のあとには質疑応答や感想を分かち合う時間を設けることもあります。会員の方だけでなく、ご関心のある地域の皆さまにもご参加いただける回を設けております。
`,
    pageType: "HP",
    siteType: "main",
    overview: "メニュー「定例行事のご案内」から遷移する",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 5,
    pageIdRaw: "Phase1(5)",
    searchWords: ["継承講話会","定例行事"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "61596",
    slug: "summer-retreat",
    path: "/summer-retreat-61596",
    title: "夏期修養会",
    body: `夏期修養会は、夏季の一定期間、落ち着いた環境の中で学びと交流を深めることを目的とした行事です。
学習・講話・振り返りなどを組み合わせながら、日々では得がたいまとまった時間を通じて、物事に落ち着いて向き合う姿勢を育てます。

華やかな催しというよりも、静かに自分を整え互いを思いやる時間として位置づけています。詳細な日程や持ち物は参加者へ別途ご案内いたします。
`,
    pageType: "HP",
    siteType: "main",
    overview: "メニュー「定例行事のご案内」から遷移する",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 6,
    pageIdRaw: "Phase1(6)",
    searchWords: ["夏期修養会","定例行事"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "01051",
    slug: "volunteer-day",
    path: "/volunteer-day-01051",
    title: "奉仕者静修日",
    body: `奉仕者静修日は、日頃より会の活動を支えてくださっている奉仕者の方々が、学びと振り返りの時間を持つための集まりです。
活動報告や講話、静かな振り返りの時間を通じて、これまでの歩みをねぎらい合い、今後の支え合いにつながる機会としています。

継続的に関わってくださっている方々のための穏やかな集まりであるため、対象となる方には順次ご連絡を差し上げております。
`,
    pageType: "HP",
    siteType: "main",
    overview: "メニュー「定例行事のご案内」から遷移する",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 7,
    pageIdRaw: "Phase1(7)",
    searchWords: ["奉仕者静修日","定例行事"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "20552",
    slug: "meeting-hall",
    path: "/meeting-hall-20552",
    title: "集会室",
    body: `集会室は、福音継承教育会における講話会や定例行事など、さまざまな集まりの中心となる空間です。
簡素で整った環境を大切にしており、人数や内容に応じて座席配置を調整しながら運用しています。

初めて来られる方にも安心して過ごしていただけるよう、行事の際には係がご案内いたします。
`,
    pageType: "HP",
    siteType: "main",
    overview: "メニュー「施設について」から遷移する",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 8,
    pageIdRaw: "Phase1(8)",
    searchWords: ["施設","施設について","集会室"],
    imagePrompts: [],
    images: ['/images/meeting-hall.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "60118",
    slug: "study-room",
    path: "/study-room-60118",
    title: "学習室",
    body: `学習室は、子どもたちや参加者が落ち着いて学びに向き合うための空間です。
日々の学びの会や少人数での活動に活用しており、集中しやすい簡素な環境を心がけています。

初めて参加される方にも担当者が丁寧に案内し、人数や年齢に応じて進め方を調整しています。
`,
    pageType: "HP",
    siteType: "main",
    overview: "メニュー「施設について」から遷移する",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 9,
    pageIdRaw: "Phase1(9)",
    searchWords: ["施設","施設について","学習室"],
    imagePrompts: [],
    images: ['/images/study-room.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "40869",
    slug: "retreat-room",
    path: "/retreat-room-40869",
    title: "静修室",
    body: `静修室は、落ち着いた環境の中で心を整え、静かに過ごすための空間です。
行事の合間や学びの節目に、自分の歩みを振り返ったり気持ちを整えたりする場として用いられており、必要以上に刺激のない簡素な環境を保っています。

私語を控え他の利用者の時間を妨げないよう配慮しながら利用していただいています。見学の際も利用状況によっては立ち入りを控えていただく場合があります。
`,
    pageType: "HP",
    siteType: "main",
    overview: "メニュー「施設について」から遷移する",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 10,
    pageIdRaw: "Phase1(10)",
    searchWords: ["施設","施設について","静修室"],
    imagePrompts: [],
    images: ['/images/retreat-room.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "82096",
    slug: "1",
    path: "/1-82096",
    title: "第1教育寮",
    body: `第1教育寮は、当会の活動に継続的に参加する方々のうち、主として男子を対象とした滞在施設です。
規則正しい生活・身のまわりを整えること・他者への配慮など、共同生活の中で大切にしたい姿勢を育む場として運用しています。

担当者が見守りを行い、初めて利用される方にも無理のない形で生活に馴染んでいただけるよう案内しています。
`,
    pageType: "HP",
    siteType: "main",
    overview: "メニュー「施設について」から遷移する",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 11,
    pageIdRaw: "Phase1(11)",
    searchWords: ["施設","施設について","第1教育寮","教育寮"],
    imagePrompts: [],
    images: ['/images/dorm-1.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "00227",
    slug: "2",
    path: "/2-00227",
    title: "第2教育寮",
    body: `第2教育寮は、当会の活動に継続的に参加する方々のうち、主として女子を対象とした滞在施設です。
食事・休息・身支度など日々の基本を丁寧に整えることを重視し、静かで清潔な環境の中で無理なく生活が続けられるよう心がけています。

初めて寮生活を経験する方にも安心していただけるよう、担当者が生活面の案内を行っています。
`,
    pageType: "HP",
    siteType: "main",
    overview: "メニュー「施設について」から遷移する",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 12,
    pageIdRaw: "Phase1(12)",
    searchWords: ["施設","施設について","第2教育寮","教育寮"],
    imagePrompts: [],
    images: ['/images/dorm-2.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "48993",
    slug: "3",
    path: "/3-48993",
    title: "第3教育寮",
    body: `第3教育寮は、第1・第2教育寮と同様に、活動に継続的に参加する方々のための滞在施設として設けられています。
基本的な役割は他の教育寮と変わりませんが、より落ち着いた環境のもとで生活と学びの両面を整えることを重視した区画として運用されています。
そのため、利用にあたっては対象や時期を限定して案内を行う場合があります。

寮内では、静穏な生活環境を保ちながら、それぞれが自分の課題や学びに丁寧に向き合えるよう配慮しています。
日々の生活の基本を整えることに加え、落ち着いて過ごすこと、自分の役割に責任を持つこと、他者との距離感を大切にすることなど、より自立した生活姿勢が求められる場として位置づけています。
そのため、利用者には一定の生活経験や継続的な参加歴があることを前提とする場合があります。

第3教育寮は、設備や目的の面で他の教育寮と大きく異なるものではありませんが、より静かで整った環境の中で歩みを深めたい方のための施設として大切にされています。
利用に関する詳細は、必要に応じて対象者へ個別に施設使用案内を行っております。
`,
    pageType: "HP",
    siteType: "main",
    overview: "検索ワードによる",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 13,
    pageIdRaw: "Phase1(13)",
    searchWords: ["第3教育寮"],
    imagePrompts: [],
    images: ['/images/dorm-3.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "26585",
    slug: "4",
    path: "/4-26585",
    title: "第4教育寮",
    body: `404 not found`,
    pageType: "HP",
    siteType: "main",
    overview: "検索ワードによる",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 14,
    pageIdRaw: "Phase1(14)",
    searchWords: ["第4教育寮"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "13830",
    slug: "5",
    path: "/5-13830",
    title: "第5教育寮",
    body: `404 not found`,
    pageType: "HP",
    siteType: "main",
    overview: "検索ワードによる",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 15,
    pageIdRaw: "Phase1(15)",
    searchWords: ["第5教育寮"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "99820",
    slug: "membership",
    path: "/membership-99820",
    title: "入会の案内",
    body: `福音継承教育会では、当会の理念や活動にご関心をお持ちの方へ随時ご案内しております。
はじめての方には、公開行事や講話会、見学を通じて会の雰囲気にふれていただくことをおすすめしています。

特別な準備や知識は必要ありません。ご関心のある方は、公開行事やお問い合わせを通じてお気軽にご連絡ください。
`,
    pageType: "HP",
    siteType: "main",
    overview: "メニュー「入会のご案内」から遷移する",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 16,
    pageIdRaw: "Phase1(16)",
    searchWords: ["入会の案内","入会"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "43932",
    slug: "contact",
    path: "/contact-43932",
    title: "お問い合わせ",
    body: `福音継承教育会の活動内容や行事参加、見学、入会に関するご質問は、こちらよりお問い合わせいただけます。
はじめて当会を知ってくださった方にも安心してご相談いただけるよう、内容に応じて順次ご案内しております。

お問い合わせの際は、お名前、ご連絡先、ご質問内容をご記入のうえお送りください。
行事への参加を希望される場合には、参加を希望する行事名や時期などを添えていただけますと、より円滑にご案内することができます。
未成年の方の参加や見学に関するお問い合わせについては、必要に応じて保護者の方へ確認をお願いする場合がございます。

また、お問い合わせの内容によっては、確認やご案内にお時間をいただく場合があります。
行事日程や参加条件など、時期によって内容が異なるものにつきましては、最新の情報を確認のうえ順次お返事いたします。
あらかじめご了承くださいますようお願いいたします。

当会では、地域の皆さまとの穏やかなつながりを大切にしながら活動を行っております。
小さなご質問でも差し支えありませんので、ご不明な点がございましたらどうぞお気軽にお問い合わせください。
`,
    pageType: "HP",
    siteType: "main",
    overview: "メニュー「入会のご案内」から遷移する",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 17,
    pageIdRaw: "Phase1(17)",
    searchWords: ["入会の案内","入会"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "45933",
    slug: "faq",
    path: "/faq-45933",
    title: "よくある質問",
    body: `Q. どなたでも参加できますか？
A. 当会の趣旨にご理解をいただける方であれば、年齢を問わずご相談いただけます。
なお、一部の行事や課程については対象者を限定しております。

Q. 子どもだけでも参加できますか？
A. 未成年の方の参加には、原則として保護者の理解と同意をお願いしております。
課程によっては保護者説明を必須としております。

Q. 見学は可能ですか？
A. 公開行事に限り可能です。
ただし、参加者の静穏と学びを守るため、記録撮影や一部区域への立ち入りをご遠慮いただく場合があります。

Q. 途中で退会できますか？
A. ご事情に応じてご相談いただけます。
継続課程に参加中の方は、担当導き手まで事前にご連絡ください。
`,
    pageType: "HP",
    siteType: "main",
    overview: "メニュー「よくある質問」から遷移する",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 18,
    pageIdRaw: "Phase1(18)",
    searchWords: ["よくある質問","質問"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "66789",
    slug: "events",
    path: "/events-66789",
    title: "定例行事のご案内",
    body: `年間を通じて実施している行事の趣旨と一覧を掲載する。
公開されている内容は穏当だが、教育寮関係の語が散見される。
各子ページとして春季感謝集会、初等導きの会、継承講話会、夏期修養会、奉仕者静修日へ遷移可能。
`,
    pageType: "HP",
    siteType: "main",
    overview: "メニュー「定例行事のご案内」の親ページ。各行事への入口。",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 19,
    pageIdRaw: "Phase1(19)",
    searchWords: ["定例行事のご案内","年間行事","行事案内","教育祭"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "21530",
    slug: "newsletter",
    path: "/newsletter-21530",
    title: "会報一覧",
    body: `近年の会報のみ公開されており、地域奉仕、保護者説明会、児童課程の活動報告などが並ぶ。
表向きは穏当な広報ページだが、古い年度になるほど教育寮への言及が増え、写真も一部欠け始める。
バックナンバーの入口として『旧年度会報2019年春号』が最初に見つかるようになっている。
`,
    pageType: "HP",
    siteType: "main",
    overview: "公開されている会報の一覧ページ。",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 21,
    pageIdRaw: "Phase1(21)",
    searchWords: ["会報一覧","旧年度会報2019年春号"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "56069",
    slug: "schedule",
    path: "/schedule-56069",
    title: "年間予定",
    body: `春季感謝集会、夏期修養会、保護者説明会などの実施月のみ簡潔に掲載する。
行事予定自体は平凡だが、保護者向けの案内が定例行事と同列で置かれていることに少し違和感がある。
注記欄に『詳細は保護者説明会にて順次案内』とある。
`,
    pageType: "HP",
    siteType: "main",
    overview: "当年度の年間予定をまとめたページ。",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 22,
    pageIdRaw: "Phase1(22)",
    searchWords: ["年間予定","保護者説明会"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "82693",
    slug: "news-archive",
    path: "/news-archive-82693",
    title: "お知らせ一覧",
    body: `行事日程、見学案内、会報更新などの告知が並ぶ。
新しいお知らせは普通だが、古いお知らせへ遡ると欠番が多く、一部はリンク切れのまま残されている。
とくに会報更新の告知だけは不自然に残っており、『会報更新』を辿ると旧年度資料へ誘導される。
`,
    pageType: "HP",
    siteType: "main",
    overview: "公開されているお知らせ一覧。",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 23,
    pageIdRaw: "Phase1(23)",
    searchWords: ["お知らせ一覧","会報更新"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "21480",
    slug: "2019",
    path: "/2016-21480",
    title: "旧年度会報 2016年春号",
    body: `地域奉仕、児童課程、教育寮での生活支援を紹介する一般的な会報。
写真と短文が中心で、子どもたちが落ち着いて過ごしている様子が強調されている。
ただし末尾の施設欄には『第3教育寮』の文字だけがあり、詳細な説明は旧記録側へ回されている。
次の号として『旧年度会報2019年夏号』が案内される。
`,
    pageType: "HP",
    siteType: "main",
    overview: "過年度会報の1つ。",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 24,
    pageIdRaw: "Phase1(24)",
    searchWords: ["旧年度会報2019年春号","第3教育寮"],
    imagePrompts: [],
    images: ['/images/newsletter-2016-spring.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "04288",
    slug: "2019",
    path: "/2016-04288",
    title: "旧年度会報 2016年夏号",
    body: `夏期修養会と児童課程の活動を中心に掲載した会報。
表向きは学びと交流の記録だが、児童課程の写真だけ構図が不自然で、集合写真にも欠損がある。
本文の脚注に『児童課程の生活記録は別記』とあり、次号の『旧年度会報2020年春号』で適性確認に触れると告知している。
`,
    pageType: "HP",
    siteType: "main",
    overview: "過年度会報の1つ。",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 25,
    pageIdRaw: "Phase1(25)",
    searchWords: ["旧年度会報2019年夏号","児童課程"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "49925",
    slug: "2020",
    path: "/2017-49925",
    title: "旧年度会報 2017年春号",
    body: `新年度に向けた導きと適性確認を扱う会報。
保護者向けには生活の落ち着きや姿勢の習慣化と説明されている一方、内部向けらしき注記では教育寮区画の再整理が示唆される。
欄外の小さな記載に『第3教育寮公開記録』参照とあり、公開側に残された旧ページへの導線となっている。
`,
    pageType: "HP",
    siteType: "main",
    overview: "過年度会報の1つ。",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 26,
    pageIdRaw: "Phase1(26)",
    searchWords: ["旧年度会報2020年春号","適性確認"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "72269",
    slug: "3",
    path: "/3-72269",
    title: "第3教育寮 公開記録",
    body: `表向きは児童課程の生活支援区画に関する公開記録。
参加区分に『第3教育寮児童課程』が明記されており、写真の一部は欠損している。
説明文は穏当だが、生活の見守りより観察と記録の比重が高いことが読み取れる。
末尾に『施設使用案内旧』および『第3教育寮生活案内』の旧ページ名が残されている。
`,
    pageType: "HP",
    siteType: "main",
    overview: "ブログ中で示唆された第3教育寮の公開記録。",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 27,
    pageIdRaw: "Phase1(27)",
    searchWords: ["第3教育寮公開記録","児童課程"],
    imagePrompts: [],
    images: ['/images/dorm-3-public-record.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "21592",
    slug: "facility-guide",
    path: "/facility-guide-21592",
    title: "施設使用案内（旧）",
    body: `現在の施設案内より情報量が多い旧ページで、第3教育寮については『見学不可』『案内対象外』とだけ書かれている。
第1・第2教育寮には通常の説明があるのに対し、第3だけは利用対象や区画構成が伏せられており不自然である。
下部の注記に、運用変更後の資料として『第3教育寮生活案内』を参照する旨が残っている。
`,
    pageType: "HP",
    siteType: "main",
    overview: "古い施設利用案内ページ。",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 28,
    pageIdRaw: "Phase1(28)",
    searchWords: ["施設使用案内旧","見学不可"],
    imagePrompts: [],
    images: ['/images/facility-guide-old.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "35597",
    slug: "3",
    path: "/3-35597",
    title: "第3教育寮 生活案内",
    body: `児童課程参加者の生活支援区画の中でも“優秀者”が利用すると説明される旧案内。
生活時間の厳格さ、見学不可、個別案内のみといった記述が目立ち、普通の寮案内より管理施設に近い印象を与える。
更新欄には、現在の区画整理については『教育寮整備報告』に移したと記載されている。
`,
    pageType: "HP",
    siteType: "main",
    overview: "第3教育寮を一般向けに薄く案内する旧ページ。",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 29,
    pageIdRaw: "Phase1(29)",
    searchWords: ["第3教育寮生活案内","教育寮整備報告"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "82310",
    slug: "news-1",
    path: "/news-1-82310",
    title: "春の学び会（第二回）のご案内",
    body: `春の学び会（第二回）をご案内いたします。

日時：2022年4月12日（土）10:00〜12:30
場所：福音継承教育会 集会室
対象：どなたでもご参加いただけます（大人・子ども不問）
参加費：無料

今回の学び会では、「日常の中の学び」をテーマに、講話と参加者同士の交流の時間を設けております。第一回にご参加くださった方も、初めての方も、どうぞお気軽にお越しください。

お申し込みは参加者把握のためにご協力いただいておりますが、当日の飛び込み参加も歓迎しております。事前のお申し込みをご希望の方は、お電話またはお問い合わせフォームよりご連絡ください。

皆さまのご参加を、心よりお待ちしております。
`,
    pageType: "HP",
    siteType: "main",
    overview: "TOPページのお知らせ一覧（No.1）から遷移するお知らせ詳細ページ",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 30,
    pageIdRaw: "Phase1(30)",
    searchWords: ["春の学び会","学び会","お知らせ"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "47291",
    slug: "news-2",
    path: "/news-2-47291",
    title: "施設メンテナンスに伴う一時休館のお知らせ（2月28日）",
    body: `平素より福音継承教育会の活動をご支援いただき、誠にありがとうございます。

下記の期間、設備メンテナンス工事のため、施設を一時休館いたします。

休館期間：2022年2月28日（金）終日
対象施設：集会室・図書コーナー・ロビー

当日は入館いただけませんので、あらかじめご承知おきください。なお、同日に予定していた定例のことばの学び会は、翌週3月7日（金）に振り替えて実施いたします。

ご不便をおかけいたしますが、ご理解のほどよろしくお願いいたします。ご不明な点がございましたら、事務局までお問い合わせください。
`,
    pageType: "HP",
    siteType: "main",
    overview: "TOPページのお知らせ一覧（No.2）から遷移するお知らせ詳細ページ",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 31,
    pageIdRaw: "Phase1(31)",
    searchWords: ["休館","メンテナンス","お知らせ"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "63047",
    slug: "news-3",
    path: "/news-3-63047",
    title: "新年合同集会・懇親の会 開催報告",
    body: `2022年1月11日（土）、新年合同集会と懇親の会を開催いたしました。

当日は会員の皆さまや地域の方々合わせて52名にご参加いただき、穏やかで温かな時間を共に過ごすことができました。

合同集会では、会長・高津誠一より年初のご挨拶と今年の活動方針についての話があり、参加者それぞれが新たな気持ちで学びの歩みを始める場となりました。

懇親の会では、旧知の方との再会や、今年初めて参加された方々との交流が生まれ、輪の広がりを感じる機会となりました。ご参加いただいた皆さまに、心より感謝申し上げます。

次回の合同集会は、6月を予定しております。詳細は後日改めてご案内いたします。
`,
    pageType: "HP",
    siteType: "main",
    overview: "TOPページのお知らせ一覧（No.3）から遷移するお知らせ詳細ページ",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 32,
    pageIdRaw: "Phase1(32)",
    searchWords: ["新年合同集会","懇親の会","合同集会","お知らせ"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "95182",
    slug: "news-4",
    path: "/news-4-95182",
    title: "冬季休会期間のご案内（12月26日〜1月5日）",
    body: `福音継承教育会では、年末年始の時期に合わせて冬季休会期間を設けております。

休会期間：2021年12月26日（木）〜 2022年1月5日（日）

上記の期間中は、定例の集会・学び会をはじめ、施設の窓口対応もお休みをいただきます。緊急のご連絡については、事務局メールにてお問い合わせください（返信は1月6日以降となります）。

新年最初の活動は、1月11日（土）の新年合同集会からとなります。

皆さまどうぞよいお年をお迎えください。
`,
    pageType: "HP",
    siteType: "main",
    overview: "TOPページのお知らせ一覧（No.4）から遷移するお知らせ詳細ページ",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 33,
    pageIdRaw: "Phase1(33)",
    searchWords: ["冬季休会","年末年始","休会","お知らせ"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "31876",
    slug: "news-5",
    path: "/news-5-31876",
    title: "子ども向け「ことばと学び」ワークショップ 参加者募集",
    body: `子どもたちを対象とした「ことばと学び」ワークショップの参加者を募集いたします。

日時：2021年12月14日（土）13:00〜15:30
場所：福音継承教育会 集会室
対象：小学1年生〜6年生
定員：20名（先着順）
参加費：無料（保護者の付き添い歓迎）

読み聞かせや語り合い、かんたんな書き活動を通して、「ことば」の豊かさに触れる2時間半です。難しい知識は一切不要。子どもたちが自分のことばで考え、表現する楽しさを感じられるよう工夫しています。

お申し込みはお電話またはお問い合わせフォームにて、お子さまの氏名・学年をお知らせください。定員に達し次第、募集を締め切らせていただきます。

ご参加をお待ちしております。
`,
    pageType: "HP",
    siteType: "main",
    overview: "TOPページのお知らせ一覧（No.5）から遷移するお知らせ詳細ページ",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 34,
    pageIdRaw: "Phase1(34)",
    searchWords: ["ことばと学び","ワークショップ","子ども","お知らせ"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "43946",
    slug: "dorm-report",
    path: "/dorm-report-43946",
    title: "教育寮整備報告",
    body: `本資料は、教育寮全体の運用状況見直しに伴い、各区画の用途整理及び記録体系の再編を実施した旨をまとめた内部報告である。
外形上は施設運用の適正化を目的とする事務文書の体裁を取っているが、その実質は各教育寮の機能を再定義し、従前の記録線を切断しながら、後続運用に都合のよい形へ再編するための整理資料である。

第3教育寮については、従前の生活支援区画としての運用を改め、指導及び観察を主とする区画へ用途改変を行った旨が明記されている。
また、生活記録、面談記録及び日課記録の一部を別綴じ管理へ移行し通常台帳から除外したとされている。
これは保管の最適化ではなく、[R:3:実像を直接たどれない構造への組換え]であると解するのが相当である。

第4教育寮及び第5教育寮については、現行運用との整合性を欠く旧記録を抹消処理したとされ、制度変更と記録消去が並行して進められていたことが確認される。

よって、本件は施設機能の転換と記録体系の断絶を同時に進めた制度再編の痕跡資料であり、その公開可能な外形は「第3教育寮年次報告2013」においてのみ確認できる。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase2",
    phaseOrder: 2,
    phaseIndex: 1,
    pageIdRaw: "Phase2(1)",
    searchWords: ["教育寮整備報告"],
    imagePrompts: [],
    pdfs: ['/pdf/facility-report.pdf', '/pdf/facility-report-floorplan.pdf'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "02728",
    slug: "3-2014",
    path: "/3-2011-02728",
    title: "第3教育寮 年次報告 2014",
    body: `本資料は、第3教育寮に関する2014年の運用報告として整理されている。
外形上は生活支援報告の体裁を取っているが、記載内容に照らせば、既に教育的配慮より管理上の観点が強く前景化している。

主要項目として「児童課程」「生活指導」「夜間区画」「観察記録」等の語が並んでいるが、各項目の所見の重心は安心感の形成や個別支援ではなく、日課への追従、応答の安定、夜間における行動の固定化といった統制状態の確認に置かれている。
「夜間区画」が独立した重みを持っていることからも、夜間は休息の時間としてより、日中とは異なる条件下で反応を確認する観察区分として扱われていたことが読み取れる。

記録の言い回しには生活支援や見守りといった穏当な語も残されており、制度の外形はまだ教育施設として保たれている。
しかし、評価軸はすでに応答の安定、日課の固定、姿勢及び発話の整いという方向へ寄っており、本件は管理の基準が浸透し始めた初期段階の資料として読むのが適当である。

よって、本件は、第3教育寮の運用が教育施設の体裁を保ちながら反応管理へ傾いていく初期段階を示す年次資料であり、翌年度の変化を「第3教育寮年次報告2015」において継続確認することを前提とした接続資料として扱うことが適当である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase2",
    phaseOrder: 2,
    phaseIndex: 2,
    pageIdRaw: "Phase2(2)",
    searchWords: ["第3教育寮年次報告2014","第3教育寮年次報告"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "79224",
    slug: "3-2015",
    path: "/3-2012-79224",
    title: "第3教育寮 年次報告 2015",
    body: `本資料は、第3教育寮に関する2015年の年次報告として整理されている。
外形上は前年度までと同様に教育施設の運用報告の体裁を取っているが、「応答」「適性」「別区画」といった管理語が前面に出ており、学習内容や成長経過の総括というより、対象の反応特性と区画整理を中心とする管理報告としての性格が強まっている。

「適性」の語が応答の揺れの少なさ、管理負担の軽さと並行して扱われており、2012年段階で既に第3教育寮は対象を反応特性ごとに分類し次段階へ接続するための中継区画へ変質しつつあった。
「別区画」に関する記述も、安定・不安定・継続観察といった状態区分と接続する形で記されており、生活空間が評価と選別の装置として用いられていたことがうかがえる。

また、掲載写真が前年度より減少し、本文も短縮されている。対象の実像を見せる記録から、状態だけを処理語で残す記録への転換が進み始めていたと推認される。

よって、本件は2014年以前の緩やかな教育報告と露骨な管理報告との間に位置する移行期資料であり、再編後の集約版として「第3教育寮年次報告2013」へ接続するものとして扱うことが適当である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase2",
    phaseOrder: 2,
    phaseIndex: 3,
    pageIdRaw: "Phase2(3)",
    searchWords: ["第3教育寮年次報告2015","第3教育寮年次報告"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "06334",
    slug: "3-2016",
    path: "/3-2013-06334",
    title: "第3教育寮 年次報告 2016",
    body: `本資料は、第3教育寮に関する2016年の年次報告として整理されている。
ただし、通常の施設年報に見られる教育成果や生活支援実績の総括は後景に退いており、管理報告に近い印象を与える。
黒塗りの範囲が前年以前より明らかに増加しており、児童課程に属する記録の一部が閲覧対象外とされていることも確認される。

判読可能な範囲では「観察の継続」「生活時間の固定」「個別指導後の再測定」といった語が反復して記載されており、これらは学習や成長の成果を示すものではなく、対象の反応を継続的に管理するための運用指標として機能している。

本資料末尾には、日常運用の詳細は「[R:3:第3教育寮指導日誌抜粋]」へ移したとの注記が付されており、児童課程側の整理については「児童課程記録抜粋」が別に存在することも示されている。

よって、本件は、第3教育寮が教育施設の外形を保ちながら実態としては反応管理と生活統制を軸に動いていたことを示す年次資料として扱うことが適当である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase2",
    phaseOrder: 2,
    phaseIndex: 4,
    pageIdRaw: "Phase2(4)",
    searchWords: ["第3教育寮年次報告2013","第3教育寮年次報告"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "89893",
    slug: "child-records",
    path: "/child-records-89893",
    title: "児童課程記録 抜粋",
    body: `本資料は、児童課程対象者に関する記録のうち、一部のみを抜粋したものである。
頁面上には日課、姿勢、発話、就寝前観察その他の項目が整然と並べられているが、その記載内容に照らせば、教育記録というより年少者の反応を細部にわたり統制するための管理記録として機能していたものと認められる。

日課欄は児童の一日を生活の流れとして把握するためのものではなく、各場面ごとに反応が予定された型に収まっているかを確認するための形式である。
姿勢欄は応答の安定性を外形的に把握するための主要指標として独立して設けられており、発話欄では内容の豊かさより発話量・返答形式・指示外発話の有無が前面に出ている。

就寝前観察は生活記録の補足ではなく、[R:3:夜間帯へ入る直前の状態を測定し、その後の夜間記録へ接続するための前段観察]として整理されていたものと理解すべきである。

欄外注記には日誌側との照合が前提とされており、本資料は「第3教育寮指導日誌抜粋」と組み合わせて読まれることを想定した基礎記録であったことが確認される。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase2",
    phaseOrder: 2,
    phaseIndex: 5,
    pageIdRaw: "Phase2(5)",
    searchWords: ["児童課程記録抜粋","年少課程日課"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "75800",
    slug: "3",
    path: "/3-75800",
    title: "第3教育寮 指導日誌 抜粋",
    body: `本資料は、第3教育寮において作成されていた指導日誌のうち、一部のみを抜粋した記録である。
頁面の大半は黒塗り又は欠損により判読不能であるが、残存箇所には「応答遅延」「視線固定」「再指示」「[R:3:安定後別室]」等の語が連続して確認できる。

これらの語から、本日誌は教育的支援の記録というより、所定の応答が得られるまで同一の働き掛けを繰り返すことを前提とした管理日誌であったことが読み取れる。
「安定後別室」は一定の状態に到達した後の定型的処理として読め、ここでいう安定は本人の安心ではなく、管理側が求める反応形式が確保された状態を指している可能性が高い。

本日誌は後半部が「夜間観察記録2」へ続く構造を有しており、日中の指導及び観察が夜間帯の記録と連続していたことが確認される。
また、欄外注記には「第3教育寮面談記録抜粋」及び[R:3:導き理解度]との照合が前提とされており、本資料は日中・面談・夜間の各記録を横断的に結び付ける中間資料として位置付けるのが適当である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase2",
    phaseOrder: 2,
    phaseIndex: 6,
    pageIdRaw: "Phase2(6)",
    searchWords: ["第3教育寮指導日誌抜粋"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "34200",
    slug: "3",
    path: "/3-34200",
    title: "第3教育寮 面談記録 抜粋",
    body: `本資料は、第3教育寮において作成された内部面談記録の一部を抜粋したものであり、保護者説明用又は外部共有用の文書とは性質を異にする。
頁面の多くは黒塗りにより判読不能であるが、残存箇所からは、児童の発話内容、拒否又は抵抗の有無、及び「[R:3:導きへの理解度]」に関する記載が確認できる。

面談は児童の自由な発話を引き出すためのものとしては構成されておらず、返答の遅延、定型的応答の程度、拒否的反応の有無が評価の重心となっている。
「導きへの理解度」とは本人の納得ではなく、与えられた枠組みを抵抗なく受け入れているかを測る内部尺度として用いられていた可能性が高い。

記録末尾には、本件が「夜間観察記録1」に整理された発語、離床、泣き声及び安定時間といった夜間の観察結果と突き合わせて判断されていたことを示す注記が付されており、面談は単独の聞き取りではなく昼夜をまたぐ反応管理の一環として運用されていたとみるのが相当である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase2",
    phaseOrder: 2,
    phaseIndex: 7,
    pageIdRaw: "Phase2(7)",
    searchWords: ["第3教育寮面談記録抜粋","導き理解度"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "36895",
    slug: "1",
    path: "/1-36895",
    title: "夜間観察記録 1",
    body: `本記録は、第3教育寮における夜間帯の対象反応を整理した観察資料であり、外形上は就寝後の状態確認記録の体裁を取っている。
もっとも、記載項目に照らせば、夜間における反応変動を測定し後続の調整判断へ接続するための観察記録として作成されていたものと認められる。

判読可能な範囲では、就寝後の発語、離床、泣き声及び睡眠導入後の安定時間が主要観察項目として淡々と並べられている。
これらは情緒理解のための記述ではなく、外部から観測可能な行動表出の有無を経過時間とともに記録するための指標として用いられている。
特に睡眠導入後の安定時間は、休息の質ではなく「一定の状態へ移行した後どれだけ揺れずに維持できるか」を測るための項目であり、夜間が休息の時間としてではなく観察区分として扱われていたことを示している。

本頁は夜間観察の前半資料であり、その後の処理及び翌朝にかけた変化確認は「[R:3:夜間観察記録2]」において引き継がれる構造となっていた。
よって、本件は夜間観察が単なる見守りではなく管理工程の一部であったことを示す初期資料として扱うことが適当である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase2",
    phaseOrder: 2,
    phaseIndex: 8,
    pageIdRaw: "Phase2(8)",
    searchWords: ["夜間観察記録1"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "93054",
    slug: "2",
    path: "/2-93054",
    title: "夜間観察記録 2",
    body: `本記録は、「夜間観察記録1」に続く後段資料であり、夜間帯における対象の反応変化を継続的に追跡した観察記録として整理されている。
先行頁と比較すると黒塗り範囲はさらに拡大しているが、残存箇所からは「処置後」「再導後」という語が明確に読み取れる。

「処置後」と「再導後」が並置されている構成は、対象の自然な夜間経過を観察するためではなく、一定の処理を加えた後の反応変化を段階的に確認するための整理様式であることを示している。
また、本記録は翌朝の状態まで連続して記録されており、翌朝評価の集約項目として「[R:3:感情起伏抑制]」が含まれている点は、夜間観察の目的が休息の確保ではなく情動の安定化にあったことを決定的に示している。

本記録末尾には翌朝評価を含む集約報告の提出先として「[R:3:応答安定報告]」が示されており、本件は夜間から翌朝にかけて測定された反応変化を安定性評価へ回収するための前段資料として扱うことが適当である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase2",
    phaseOrder: 2,
    phaseIndex: 9,
    pageIdRaw: "Phase2(9)",
    searchWords: ["夜間観察記録2"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "93053",
    slug: "response-report",
    path: "/response-report-93053",
    title: "応答安定報告",
    body: `本報告は、第3教育寮児童課程における対象の応答状態について、継続観察の結果を整理した内部資料である。
記載項目としては発話の均一化、指示に対する反応速度、感情起伏の抑制が並んでおり、表向きには教育的安定を確認する報告の体裁を取っている。

ここでいう「均一化」とは語彙が増えたことを意味するのではなく、どの場面でも同一の型で応答する傾向が強まったことを指している。「安定」とは心身の健康な均衡ではなく、感情の表出が減少し扱いやすい状態へ近づいたことを指す内部語である。
これらの評価項目は教育的配慮の語をまといながら、実際には人格の調整を目的として並べられており、閲覧者にとってここで初めて「安定」の語の実質が明瞭になる。

報告末尾には、特定事例については「第3教育寮事故報告（[R:3:長谷川亘]）」として別記参照とする旨の注記が付されており、応答安定の評価が重大な結果を伴った事案とも接続していたことが示されている。
また、関連画像については「写真記録欠損」として別綴管理とされている。
よって、本件は第3教育寮における反応管理の性格を決定的に示す報告として扱うことが適当である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase2",
    phaseOrder: 2,
    phaseIndex: 10,
    pageIdRaw: "Phase2(10)",
    searchWords: ["応答安定報告","感情起伏抑制"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "87973",
    slug: "photo-log-missing",
    path: "/photo-log-missing-87973",
    title: "写真記録欠損ページ",
    body: `本頁は、第3教育寮に係る写真記録群のうち、画像本体が削除された後に残置された欠損頁である。
頁面上には写真枠及び番号欄のみが残されているが、画像本体はすべて削除済みであり、姿態や撮影場面を直接確認することはできない。

残存するキャプション断片には「第3教育寮児童課程」及び「夜間観察後」との記載が判読可能であり、少なくとも一部の画像が夜間観察後の状態を記録する目的で撮影されていた可能性が高い。

画像のみが消去され枠組みと番号が残されている点は、偶発的欠損ではなく、対象の視覚的連続性を本体記録上から切り離しつつ撮影記録の存在だけを痕跡として残すための処理であった可能性を示している。

頁末注記に残された「生活指導補遺」及び姿勢習慣化への移管の記載と合わせて読むと、写真記録が生活統制過程を裏付ける補助資料であったことがうかがえる。
本件は視覚記録を文字記録へ置換しながら対象の実像だけを消去していく過程を示す移行資料として扱うことが適当である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase2",
    phaseOrder: 2,
    phaseIndex: 11,
    pageIdRaw: "Phase2(11)",
    searchWords: ["写真記録欠損","第3教育寮児童課程"],
    imagePrompts: [],
    images: ['/images/photo-record-loss.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "26721",
    slug: "guidance-notes",
    path: "/guidance-notes-26721",
    title: "生活指導補遺",
    body: `第一条　本補遺は、第3教育寮における生活指導の運用補足を定めるものであり、対象の日常を安定させ、生活上の乱れを未然に抑制することを目的とする。
生活指導は食事、発話、姿勢、就寝及び起床の各場面において一貫して行うものとし、各項目の運用は生活習慣の形成を名目としつつ、対象の応答及び行動が常に一定の範囲に収まることを前提として実施する。

第二条　食事・発話・姿勢・就寝・起床の各場面は、生活上の便宜のためではなく、対象の反応安定性を継続的に確認するための観察工程として位置付ける。
発話指導は会話能力の伸長を目的とするのではなく応答の均質化を維持するための補助手段とし、姿勢の崩れや視線の逸脱は情動変動の前兆として扱い後続観察へ接続する。

第七条　本補遺における各指導項目は相互に独立した生活習慣としてではなく、対象全体の反応を一貫して整えるための連続工程として運用する。
生活指導の名目であっても、実際には[R:3:対象の人格的表出を日常の全場面にわたり徐々に均していく]運用となることを妨げない。

第九条　区画単位の振り分け及び別区画移動の記録については、本補遺に直接記載しない。
これらの事項は「第3教育寮区画変更記録」において別途整理するものとし、本補遺はあくまで生活場面における統制の運用を定める文書として位置付ける。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase2",
    phaseOrder: 2,
    phaseIndex: 12,
    pageIdRaw: "Phase2(12)",
    searchWords: ["生活指導補遺","姿勢習慣化"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "59161",
    slug: "3",
    path: "/3-59161",
    title: "第3教育寮 区画変更記録",
    body: `本記録は、第3教育寮内における対象の区画移動及びその判断理由を整理した内部資料である。
外形上は施設内運用記録の形式を取っているが、記載内容に照らせば、対象の状態を基準として振り分けを行うための選別記録として機能していたものと認められる。

判読可能な範囲では「安定後別区画」「継続観察」「[R:3:対象外保留]」といった語が反復して記載されている。
「安定後別区画」は一定の状態に到達した対象のみが次の区画へ移される構造を示しており、ここでいう安定は本人の安心ではなく管理側が求める応答形式を維持できる状態を指している。
「対象外保留」は通常の区画変更線上に位置付けられない対象が別枠として囲い込まれていたことを意味しており、第3教育寮が観察・選別・保留のいずれかへ対象を振り分ける前処理施設の性格を帯びていたことがうかがえる。

本記録末尾には「奉仕者向け第3教育寮補助要項」及び児童声掛けに相当する資料への言及が付されており、区画変更が日常的な声掛けや補助対応の積み重ねによって支えられていたことが示されている。
よって、本件は第3教育寮が対象の反応状態を測り選別し次段階へ接続するための前処理区画であったことを示す重要資料として扱うことが適当である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase2",
    phaseOrder: 2,
    phaseIndex: 13,
    pageIdRaw: "Phase2(13)",
    searchWords: ["第3教育寮区画変更記録","別区画移動"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "15750",
    slug: "3",
    path: "/3-15750",
    title: "奉仕者向け第3教育寮補助要項",
    body: `第一条　本要項は、第3教育寮において奉仕者が従事する補助業務の基本事項を定めるものである。
補助業務は個々の奉仕者の判断に委ねるものではなく、対象の反応及び応答を一定の範囲に保持することを目的とした統一的手順として運用する。

第二条　声掛けは対象の理解を広げるために行うのではなく、現在の行動状態を維持し次の指示への応答を乱さないために行う。
説明・説得・感情的共感の表出は原則として補助業務の範囲外とし、必要最小限の確認及び指示に限る。

第四条　奉仕者は対象の視線、発話、返答速度、姿勢保持及び感情変動の所見を所定欄に記録する。
指示に対する反応差、拒否反応の継続時間及び安定までの経過時間は継続観察上の基礎項目として優先的に残す。

第六条　通常範囲を超える揺れ、沈黙又は応答逸脱が認められた場合、奉仕者は独自判断による修正を行ってはならない。
必要に応じて対象は[R:3:別室対応、再指示又は後続観察]へ回されるが、その判断は奉仕者が行うものではない。

第九条　個別事情及び例外対応については本要項に記載しない。
これらは「個別指導補遺」において別途整理するものとし、本要項は反応の統一及び記録の標準化を支えるための実務要領として機能する。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase2",
    phaseOrder: 2,
    phaseIndex: 14,
    pageIdRaw: "Phase2(14)",
    searchWords: ["奉仕者向け第3教育寮補助要項","児童声掛け"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "77516",
    slug: "a",
    path: "/a-77516",
    title: "個別指導補遺 A",
    body: `本補遺は、個別指導名義で作成された補足記録のうち、比較的初期段階に属する整理資料である。
各欄には発話・視線・拒否反応・安定までの時間といった項目が機械的に記載されており、教育記録というより対象の反応を測定し後続の調整工程に備えて整理するための管理補遺として読むのが相当である。

発話は内容よりも量及び型の安定性、拒否反応は出現の有無と持続時間、安定までの時間は介入後にどれだけ早く所定の状態へ戻るかという観点で整理されており、いずれも内面理解より外形的反応の管理を目的としている。
氏名欄の大半は黒塗りで覆われており、記録に残されているのは誰であるかではなく、どのような反応を示したかという測定結果のみである。

よって、本件は個別指導の名目の下で行われていた反応管理の初期段階を示す補遺資料として扱うことが適当である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase2",
    phaseOrder: 2,
    phaseIndex: 15,
    pageIdRaw: "Phase2(15)",
    searchWords: ["個別指導補遺"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "57382",
    slug: "b",
    path: "/b-57382",
    title: "個別指導補遺 B",
    body: `本補遺は、個別指導補遺 A の後段資料として整理されているが、記載の判読性はAよりもさらに低く、黒塗りの範囲も明らかに拡大している。
頁面上に残されているのは欄名、処理区分及び移管注記に相当する断片のみであり、詳細な経過・判断内容の大半は意図的に遮断されている。

判読可能な範囲では「再指示後」「処置継続」「別綴へ移管」といった語が断片的に残されており、一定の反応が得られなかった場合に再指示を行い処置を継続し最終的には通常記録から切り離して別綴へ移すという段階的処理が前提となっていたことが読み取れる。
写真記録も通常欄とは別枠に整理されており、対象の実像を本体記録から切り離し処理履歴だけを残す再編が進んでいたことが確認できる。

本補遺の欄外には「旧保護者説明資料」と並べて読むことで[R:3:内部での継続処理と外向け説明との落差]が確認可能になる旨の注記が残されており、外向け文書が実態の言換えにすぎなかった可能性を補強している。
よって、本件は表に出せない記録の一部であることを最も濃く示す段階資料として扱うことが適当である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase2",
    phaseOrder: 2,
    phaseIndex: 16,
    pageIdRaw: "Phase2(16)",
    searchWords: ["個別指導補遺"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "53124",
    slug: "guardian-briefing",
    path: "/guardian-briefing-53124",
    title: "旧保護者説明資料",
    body: `当会では、児童一人ひとりが落ち着いた日常を送ることができるよう、生活の整いを大切にした教育課程を行っております。
生活の落ち着き、姿勢の習慣化、受答えの安定は、日々の成長を支える大切な基盤と考えており、対人場面でも穏やかな表情・落ち着いた姿勢・静かな受答えが自然に身に付くよう声掛けと見守りを重ねております。

児童の状態に応じては個別の観察を通じて、発話の様子、視線の向け方、姿勢の保ち方、感情の起伏などを丁寧に確認し、生活支援を行っております。
変化の大きな時期には個別の観察期間を設けることもありますが、これも日常をより穏やかに整えるための配慮によるものです。

なお、児童の生活状況に関する詳細な記録及び個別対応の内容については、関係者間で適切に共有し、必要な範囲に限って保管しております。
過去には「お知らせ：長谷川亘について」のように、関係者に関わる事柄をお知らせとしてご連絡した事例もございます。
日常の小さな変化につきましても、皆様に長い目で見守っていただけますよう、お願い申し上げます。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase2",
    phaseOrder: 2,
    phaseIndex: 17,
    pageIdRaw: "Phase2(17)",
    searchWords: ["旧保護者説明資料"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "16094",
    slug: "3",
    path: "/3-16094",
    title: "第3教育寮 事故報告（長谷川亘）",
    body: `本報告は、第3教育寮において発生した事故に関し、長谷川亘の取扱経過及び記録移管状況を整理した内部資料である。
記録上、長谷川亘は途中段階で別記録へ移された対象として扱われており、通常の教育記録のみでは処理できない事案として認識されていたことが確認される。

本文の大半は黒塗りにより判読不能であるが、事故発生後に長谷川亘の記録が通常台帳から切り離されたこと、及びその後の参照系統が追跡困難となっていることがうかがえる。
特に、黒塗りの中に「後日死亡確認済み」との文言だけが例外的に残されており、少なくとも後日の時点で死亡確認に至ったことのみは確定できる。

本体記録と「お知らせ：長谷川亘について」に代表される外部向け告知との間には明確な落差があり、本件は内部記録と外部説明との落差を最初に露呈させる事案として位置付けられる。
よって、本件は単なる事故報告ではなく、教育施設の外形の背後に記録切離し・別系統管理・死亡確認後の再整理を含む制度が存在していたことを示す先行事例として扱うことが適当である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase2",
    phaseOrder: 2,
    phaseIndex: 18,
    pageIdRaw: "Phase2(18)",
    searchWords: ["長谷川亘"],
    imagePrompts: [],
    pdfs: ['/pdf/accident-hasegawa.pdf'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "77959",
    slug: "notice-hasegawa",
    path: "/notice-hasegawa-77959",
    title: "お知らせ：長谷川亘について",
    body: `この度、当会の関係者である長谷川亘が逝去いたしましたことを、謹んでお知らせ申し上げます。
長谷川亘は、当会の教育課程に関わる活動においてご尽力いただいた方であり、皆様に深くお世話になった方でございました。
本人及びご遺族のご意向により、詳細につきましては公表を控えさせていただいております。
ご関係の皆様には、突然のご連絡となりましたことをお詫び申し上げますとともに、謹んでご冥福をお祈り申し上げます。

なお、長谷川亘に関わる経緯及び当会内部での対応につきましては、関係者間で適切に共有の上、所定の手続きに従って整理をしております。
個別にご確認を希望される関係者の方につきましては、当会事務局までお問い合わせください。
本件に関連する記録の一部は、内部管理上の整理のため、所定の補遺別綴において別途保管しております。
ご本人及びご遺族のご意向に沿った形で、適切に取り扱いをしてまいります。

当会では、今後も教育課程の安定した運営を続けてまいります。
また、引き続き関係者の皆様への対応を誠実に行ってまいる所存でございます。
関係者の皆様には大変ご心配をおかけしておりますこと、深くお詫び申し上げます。
長谷川亘の在会中のご貢献に、改めて心から感謝申し上げます。

今後のご連絡等につきましては、当会事務局を通じてご案内差し上げます。
何卒ご理解とご協力を賜りますよう、よろしくお願い申し上げます。
`,
    pageType: "HP",
    siteType: "main",
    overview: "検索ワードによる",
    phaseLabel: "Phase2",
    phaseOrder: 2,
    phaseIndex: 19,
    pageIdRaw: "Phase2(19)",
    searchWords: ["お知らせ：長谷川亘"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "59905",
    slug: "3",
    path: "/3-59905",
    title: "第3教育寮 補遺別綴",
    body: `本資料は、第3教育寮に係る通常記録群から切り離された補遺別綴として整理されている。
頁面の大半は黒塗り処理により判読不能であり、残存しているのは欄外の注記、見出し断片及び移管先を示すごく一部の語句に限られる。
本資料は個別事案の内容を伝える文書としてよりも、何が別系統へ移されたかという処理の痕跡だけを残す資料として読むのが相当である。

黒塗りの中に例外的に残された「写真記録は別綴へ移管」という断片から、第3教育寮段階において既に対象の外見的連続性を通常記録から外す運用が始まっていたことがうかがえる。
また「児童課程補遺閲覧不可」という記載は、補遺群が通常の閲覧経路から意図的に遮断されていたことを示す。
人名欄、写真欄、識別番号欄及び補遺参照欄が連動して抹消されており、対象の名前と姿を本体台帳から退かせ処理履歴だけを残す再編過程そのものを示している。

本資料の末尾には、後段階の再編資料として「応答統制記録」「発話量制御」及び「初等課程再編案」という表題のみが判読可能な形で残されている。
これらの表題は、本補遺別綴が単なる保管資料ではなく、応答及び発話の統制管理を制度的な再編資料へ接続する中間地点であったことを示すものであり、関連資料として参照されたい。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase2",
    phaseOrder: 2,
    phaseIndex: 20,
    pageIdRaw: "Phase2(20)",
    searchWords: ["第3教育寮補遺別綴","児童課程補遺"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "85045",
    slug: "response-control",
    path: "/response-control-85045",
    title: "応答統制記録",
    body: `本記録は、指示に対する返答の揺れ、視線の向き、発話量の増減その他これに準ずる反応指標を、継続的かつ数値的に管理した資料である。
外形上は教育課程に付随する観察記録の体裁を取っているが、理解度や発達段階を把握するための教育記録ではなく、人格表出を外部から制御可能な単位へ分解し、安定した反応型へ固定するための統制記録として機能していたものと認められる。

判読可能な範囲では、評価項目として、返答遅延、再指示頻度、視線逸脱、発話量変動、無応答時間及び感情表出の付随有無が反復して掲げられている。
これらは命令入力に対しどの程度まで即時的かつ均質に反応するかを確認するための項目であり、応答内容の差異は許容すべき個性ではなく、減少させるべき揺れとして記録されている。

本資料の構成は担当者の裁量に依存する臨時処理ではなく、一定の欄・指標・評価幅によって標準化されており、応答統制が制度的工程として運用されていたことを示す。
その構成及び語彙に照らせば、ここで行われていたのは教育ではなく、[R:3:人格表出を標準化された命令反応へ近づけるための制御工程]であったことが明らかであり、本件は「初等課程再編案」へ引き継がれていく中間資料として扱うことが適当である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase2",
    phaseOrder: 2,
    phaseIndex: 21,
    pageIdRaw: "Phase2(21)",
    searchWords: ["応答統制記録","発話量制御"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "03743",
    slug: "curriculum-proposal",
    path: "/curriculum-proposal-03743",
    title: "初等課程再編案",
    body: `本資料は、従前は個別に扱われていた導き、生活指導、観察及び応答調整を、一体的な課程として編成し直すための内部案である。
判読可能な範囲に照らせば、その主眼は学習内容の充実にあるのではなく、対象の反応管理をより切れ目なく運用するための工程再編に置かれており、既存の矯正手順を課程の名の下に初等段階から一貫運用可能な形式へ組み替えるための再編案として理解するのが相当である。

本案では、導きから生活指導、観察、応答調整に至るまでが、対象の反応を整え・維持し・再測定し・再調整する一連の流れとして統合されている。
観察は早期の反応の揺れを抽出し後続の応答調整へ直結させる管理観察として機能し、応答の均質化、遅延の縮小、拒否反応の抑制及び指示への追従が課程上の整理対象として位置付けられている。
このため、本資料全体からは、教育という外形を保持しつつ、実態としては[R:3:矯正手順をより早い段階へ下ろし、通常課程の内部へ埋め込もうとする意図]が明確に読み取れる。

本案は「反応矯正教育 実施記録」に整理された既存の矯正実務に裏付けられた制度化文書であり、教育の名の下で矯正工程が初等課程へ組み込まれていく転換点を示す資料として扱うことが適当である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase2",
    phaseOrder: 2,
    phaseIndex: 22,
    pageIdRaw: "Phase2(22)",
    searchWords: ["初等課程再編案","反応矯正教育"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "23814",
    slug: "control-intro",
    path: "/control-intro-23814",
    title: "反応矯正教育 実施記録",
    body: `本記録は、「反応矯正教育」の語が初めて明示的に現れる実施資料であり、当該課程が名称上のみならず実際の運用単位として存在していたことを示す重要記録である。
文面の大半は黒塗り処理により判読不能であるが、残存箇所には対象者、実施回、観察欄、処置欄及び再評価欄に相当する記載が断片的に確認される。

当該課程は応答、姿勢及び情動反応を個別に観察し必要に応じて補正する工程として整理されており、「実施」「観察」「再指示」「処置後」「再評価」といった工程語だけが抹消を免れている。
対象者は学習者としてではなく、調整可能な反応単位として分解して取り扱われており、教育の外形を借りながら実際には矯正及び反応管理を指す制度であったことが残存部分から読み取れる。

注記欄には、課程の定義及び位置付けについては[R:3:反応矯正教育施要領]参照とする旨が示されており、本件が施要領に基づく個別適用例として位置付けられていたことが確認される。
よって、本件は、反応矯正教育という制度が実在し、具体的手順を伴って運用されていたことを示す実施記録として扱うことが適当である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase2",
    phaseOrder: 2,
    phaseIndex: 23,
    pageIdRaw: "Phase2(23)",
    searchWords: ["反応矯正教育実施記録","反応矯正教育"],
    imagePrompts: [],
    pdfs: ['/pdf/response-correction-impl.pdf'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "55675",
    slug: "control-overview",
    path: "/control-overview-55675",
    title: "反応矯正教育とは",
    body: `反応矯正教育とは、児童課程対象者に対し、応答、発話、姿勢及び情動反応を一定の範囲へ安定化させることを目的として実施される内部教育課程である。
表向きの記録上は生活指導、応答訓練、情緒安定化等の教育語によって整理されているが、その実態は対象の個別性を保持したまま育成するための教育ではなく、反応の揺れを減少させ指示に対する応答を一定の型へ収束させるための矯正課程であったと認められる。

本課程は初等課程から切り出された特別課程として、応答の不安定・発話の変動・情動反応の振幅が管理上の問題として把握された対象に重点的に適用される。
反応矯正教育の中核を成す観察は、対象の個性に応じた支援のためではなく、視線、返答速度、発話量、感情変動等の項目を外形的に測定しどの反応が規格から外れているかを確認するための工程として用いられている。
関連資料において好ましい変化として扱われているのは、自発発話の減少、定型応答の増加、拒否反応の縮小及び情動起伏の平板化であり、本課程の成果は教育的成熟ではなく管理上の不確定要素の減少によって測られていた。

観察結果は反応観察表、発話制御観察、情動整序報告及び指示定着評価表等へ段階的に引き継がれ応答均質化記録へ集約される構造を有しており、具体的な手順は反応矯正教育施要領にまとめられている。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 1,
    pageIdRaw: "Phase3(1)",
    searchWords: ["反応矯正教育とは","反応矯正教育施要領"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "99545",
    slug: "control-manual",
    path: "/control-manual-99545",
    title: "反応矯正教育 施要領",
    body: `本資料は、対象の反応様式を一定の範囲へ収束させることを目的として作成された施要領であり、教育資料の形式を取りながら、その実質は観察及び矯正の工程管理文書に近い。
各工程は個別事情に応じて柔軟に運用されるものではなく、観察→再指示→別室移動→処置後観察→再評価という所定の順序で機械的に適用される手続として整理されている。

特に、別室移動が独立した工程として明記されている点は重要であり、対象への働きかけが教示のみで完結せず、環境の切替を含む複数の手段を段階的に適用することが前提となっていたことが読み取れる。
処置後観察及び再評価が後段に置かれている構造は、一回限りの指導ではなく、反応の変化を人工的に誘導しその定着度を確認するための継続的矯正手段であったことを示している。

工程ごとの評価様式として反応観察表A及び反応観察表Bへの接続が組み込まれており、この要領が実測と再評価を伴う制度的運用の中核に置かれていたことが確認される。
よって、本件は、後続の観察記録群を理解する前提となると同時に、教育の背後に存在していた矯正手段の実在を最も明瞭に示す基礎資料として扱うことが適当である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 2,
    pageIdRaw: "Phase3(2)",
    searchWords: ["反応矯正教育施要領"],
    imagePrompts: [],
    pdfs: ['/pdf/control-overview.pdf'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "70522",
    slug: "a",
    path: "/a-70522",
    title: "反応観察表 A",
    body: `本資料は、対象の基本反応を一定の観察項目ごとに整理した初期観察表である。
記載項目は視線、発話、姿勢、返答速度、感情変動その他反応指標であり、表面上は教育過程に付随する記録の形式を取っている。
しかしその記載内容に照らせば、学習理解のための教育記録というより、調整対象の状態を継続的に管理するための基礎管理表として用いられていたものと認められる。

各項目の評価は対象が何を理解したかではなく、外部から観測可能な反応が一定の範囲に収まっているかに集中している。
評価欄の「正常」又は「不安定」区分は個別事情を踏まえたものではなく機械的に適用されており、ここでいう正常とは生活上の健全性ではなく、管理側が求める反応型への近さを示す内部上の区分にすぎない。

観察表Aは初期的な反応整理にとどまる前段階の資料であり、その後は処置後項目を含むより細分化された反応観察表Bへ接続される構造を持っている。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 3,
    pageIdRaw: "Phase3(3)",
    searchWords: ["反応観察表A","反応観察表B","反応観察表"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "44272",
    slug: "b",
    path: "/b-44272",
    title: "反応観察表 B",
    body: `本資料は、先行する観察表Aの後段に位置付けられる反応観察資料であり、記載項目数、測定頻度及び参照欄のいずれにおいてもAより拡張された構成を有している。
外形上は継続観察の補助表に見えるが、対象に対する介入の反復とその結果確認を前提とした管理文書として機能していたものと認められる。

特に、Aでは見られなかった「処置後」及び「再導後」の欄が確認でき、一定の介入を加えた後に反応がどのように変化したか、再導後にその変化が固定されているかを確認するための欄として設けられている。
観察項目も時間差、変動幅、再現性、定型反応の維持及び再介入後の逸脱有無といったより細分化された形式へ移行しており、対象がどの程度期待された反応型へ近づいているかを定量的に追う評価表へ変質していたと推認される。

本資料末尾には、蓄積された個別測定結果が最終的に応答均質化記録という総括項目へ回収される構造が示されており、本件は矯正の進行を追跡し後続の総括工程へ引き渡す前段資料として機能していたものとみるのが相当である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 4,
    pageIdRaw: "Phase3(4)",
    searchWords: ["反応観察表B","反応観察表"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "19170",
    slug: "observation-record",
    path: "/observation-record-19170",
    title: "応答均質化記録",
    body: `本記録は、対象ごとの反応差を縮減し、指示に対する応答形式を一定の範囲へ収束させることを目的として作成された中心資料である。
個別性の残存は一貫して不安定要素として扱われており、返答内容、反応速度、視線移動、発話量及び対人場面における受答えの差異をいかに減少させるかが主要な観察項目として整理されている。

平板化が好ましい変化として反復して記録されており、発話内容、表情変化、受答えの調子及び反応開始の仕方が場面を問わず似通った形式へ収束していくことが目的化している。
評価欄において前景化しているのは、差異の縮小、遅延の消失、定型応答の固定及び反応様式の再現性であり、人格そのものの削減が制度上の目的となっていたことが読み取れる。

本記録中には情動面の処理については情動整序報告を参照するものとする旨の注記が付されており、まず拒否・抵抗・感情起伏を減少させた上で発話・受答え・反応形式を固定していく段階的処理が制度化されていた。
ここにおいて、応答の均質さは教育成果ではなく、[R:4:洗脳がどの程度完了したかを測る指標]として扱われていたと理解すべきである。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 5,
    pageIdRaw: "Phase3(5)",
    searchWords: ["応答均質化記録","平板化"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "39664",
    slug: "response-training",
    path: "/response-training-39664",
    title: "情動整序報告",
    body: `本報告は、対象の情動反応について、継続的な観察及び介入結果を整理した内部資料である。
感情の起伏が抑制され、拒否又は抵抗の表出が減少している状態が一貫して「安定」として扱われており、本資料における安定とは心身の自律的均衡を意味するものではなく、管理上の不確定要素が表面化しにくくなった状態を指す内部語であったと解される。

本報告では教育的支援の観点に代えて、拒否反応の減少、抵抗表出の後退、感情振幅の平準化及び対人場面における反応の固定化が肯定的所見として整理されている。
また、拒否や抵抗が「問題行動」ではなく「未整序の情動残存」として処理されていることから、対象の防衛反応を統制の不徹底として読み替える視点に立っていたことが明白である。

本報告には情動整序の後段観察として発話面に関する接続先が付されており、情動表出の縮減と発話制御観察における発話様式の固定化とが連動して扱われていたことが確認される。
よって、本件は、対象の情動反応を制度的に整序し、次に発話形式を統制していく工程へ接続する前段報告として扱うことが適当である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 6,
    pageIdRaw: "Phase3(6)",
    searchWords: ["情動整序報告"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "64341",
    slug: "cognitive-correction",
    path: "/cognitive-correction-64341",
    title: "発話制御観察",
    body: `本資料は、対象者の発話傾向について継続観察の結果を整理した記録である。
自発発話の減少及び定型応答の増加が一貫して好ましい変化として記録されており、余分な発話が減少したこと、応答が短く一定化したこと、指示外の言葉が抑えられたことが肯定的所見として並べられている。
本件で観察されているのは対話能力の成熟ではなく、発話を管理可能な形式へ収束させる監視記録として扱うのが相当である。

定型応答の増加は対象が内容を理解しているかを問うものではなく、どの場面でも一定の受答えを返すようになったかを確認するための項目として機能している。
自発発話が減り、感情の混じる言葉が減り、返答が均質になることが連続的に肯定されている以上、ここで起きているのは成長支援ではなく、[R:4:既存の人格的表出を薄め、別人格化に近い状態へ寄せていく処理]である可能性が高い。

本文中には、自発発話の減少及び定型応答の増加が指示定着評価表における後続判定へ引き渡される構造が示されており、本資料が後続の評価工程へ接続される前段資料であったことが確認される。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 7,
    pageIdRaw: "Phase3(7)",
    searchWords: ["発話制御観察"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "34551",
    slug: "progress-assessment",
    path: "/progress-assessment-34551",
    title: "指示定着評価表",
    body: `本資料は、複数回にわたり与えられた指示について、対象の応答が一定の形式へ固定されているか、時間経過に伴う遅延及び揺れがどの程度減少しているかを確認するために用いられた評価表である。
評価軸の中心は指示後の応答遅延、反復指示時の反応差、返答形式の変動幅及び指示外発話の残存状況であり、対象が何を理解したかを測るものではなく、命令系統への接続性を整備するための内部評価文書として機能していたと認められる。

本資料における「定着」とは学習内容の定着ではなく、命令に対する応答様式そのものが固定化されているかを意味する。
遅延の消失は理解に要する時間の個人差ではなく、指示と応答の間の逡巡・判断・感情的抵抗の痕跡がどの程度表面から消えているかを評価するための項目として位置付けられており、差異の減少及び応答形式の一律化が肯定的所見として集約されている。

本評価表の結果は奉仕適性判定基準における次段階可否判断の材料として集約されていたものとみられ、指示定着の程度が後続処遇への選別基準の一部として制度的に組み込まれていたことになる。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 8,
    pageIdRaw: "Phase3(8)",
    searchWords: ["指示定着評価表"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "74290",
    slug: "volunteer-training",
    path: "/volunteer-training-74290",
    title: "奉仕適性判定基準",
    body: `本資料は、矯正後の対象について後段階へ進める可否を判定するために用いられた内部基準である。
教育課程の到達度を確認するためではなく、次段階の収容及び運用に耐え得る状態へ到達しているかを測るための選別基準として機能していたものと認められる。

主要な評価軸として、応答の均質さ、情動の平板化及び長時間管理下での安定が掲げられており、対象の内面を理解するためではなく、情動反応を後続管理に適した水準まで抑制できているかを測定するための制度であった可能性が高い。
長時間管理下での安定が中心項目に置かれている点から、後段階として短期的観察ではなく持続的な収容を前提としていたことも推認される。

後段階として制度上想定されているのは第6教育寮であり、本資料は矯正後の対象を第6教育寮へ送り込むための前段資料として位置付けるのが適当である。
ここにおいて初めて、[R:4:修了判定と奉仕適性判定とが制度上明確に分離されていた事実]が見えてくる。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 9,
    pageIdRaw: "Phase3(9)",
    searchWords: ["奉仕適性判定基準"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "38965",
    slug: "6",
    path: "/6-38965",
    title: "第6教育寮 概要",
    body: `第6教育寮は、第3教育寮より後段階の区画として位置付けられる施設であり、矯正・観察・応答安定化の工程を経た対象を受け入れ、後続処遇へ接続するための保持区画として機能している。
本施設の対象は指示定着・応答均質化・管理下での安定性が確認された者であり、修了後の配置・移管・選定を前提として対象を崩さず維持するための後期管理区画として理解するのが相当である。

記録上、第6教育寮において重視されるのは学習内容の理解ではなく、対人場面における反応維持、長時間管理下での安定及び指示受容性の継続であり、次段階での用途に耐え得る状態を保持するための実務管理として運用されていたと解される。
また、修了者として整理された者と後続の選定対象として継続観察下に置かれる者が同一区画内に存在しており、修了と選定とが同一空間内で接続されている点にも特徴がある。

本概要は施設の位置付け及び機能を示すにとどまり、日常運用・行動規範・生活上の細則は第6教育寮生活要領に定められており、実際の運用はその要領に従って実施される。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 10,
    pageIdRaw: "Phase3(10)",
    searchWords: ["第6教育寮概要","第6教育寮生活要領"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "60582",
    slug: "6",
    path: "/6-60582",
    title: "第6教育寮 生活要領",
    body: `本資料は、第6教育寮における日常運用、行動規範及び管理前提を定めた生活要領である。
入寮初期の習慣形成を目的とする要領ではなく、既に整えられた対象を崩さず維持し次段階へ接続するための管理文書として読むべき性質が強く、第3教育寮と比較して生活上の自由度が明らかに低い。

本資料において「奉仕」の語が相対的に強く前景化している点が特徴的であり、寮内で完結する生活ではなく、将来何らかの役割へ移されることを前提に整えられていた可能性が高い。
応答、姿勢、対人時の態度及び日常動線に関する記載が反復しており、個人ごとの生活のしやすさより外部から見た安定性及び一貫性の維持が優先されている。

本資料は第6教育寮修了者処遇基準と直結しており、生活要領そのものが修了後処遇への接続を前提として設計されていることを明示する。
「奉仕」の語が初めて強く現れることにより、修了後に[R:4:別の役割が待っていること]が明確に示唆されており、本件は修了後処遇への接続を日常運用の中に織り込んだ中間文書として扱うことが適当である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 11,
    pageIdRaw: "Phase3(11)",
    searchWords: ["第6教育寮生活要領"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "40764",
    slug: "6",
    path: "/6-40764",
    title: "第6教育寮 修了者処遇基準",
    body: `本基準は、第6教育寮課程を修了した者に対し、修了後いかなる整理、配置、移管又は選定を行うかを定めた内部資料である。
文面の相当部分には黒塗り処理が施されており、具体的な処遇区分、判定閾値及び後続接続先の名称までは判読できないが、残存箇所からは修了が終点ではなく次段階への振分を前提とした制度設計が存在していたことは明確に読み取れる。

対象者は修了者として一律に終結処理されるのではなく、観察結果、応答傾向、管理負担、対人反応、安定性その他の項目に基づき複数の後続区分へ整理されることが予定されており、修了後の進路支援ではなく修了後の対象を次工程へ接続するための選別基準として機能していたと認められる。
したがって、本件は通常の修了要領ではなく、[R:4:修了者を後続処理へ配分するための選別基準]として扱うのが相当である。

本基準は第6教育寮修了者一覧と接続されており、一覧に記載された修了者は本基準に従って次段階の整理対象となる可能性をあらかじめ織り込まれていた。
よって、本件は修了が終点ではなく、次の整理工程の起点にすぎなかったことを示す制度資料として扱うことが適当である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 12,
    pageIdRaw: "Phase3(12)",
    searchWords: ["第6教育寮修了者処遇基準"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "33385",
    slug: "6",
    path: "/6-33385",
    title: "第6教育寮 修了者一覧",
    body: `本頁は、第6教育寮課程を修了した者の一覧として整理されているが、通常の卒業名簿とは体裁を異にし、処遇前提の整理台帳として機能していた印象が強い。

判読可能な範囲では、[R:4:長谷川美咲、栗原里奈、結城春香、相沢大輔、大貫悠太、白井真由]等の氏名が確認できるものの、周辺欄の多くは黒塗りで覆われており、各修了者がどの経路へ接続されたのかという核心部分が意図的に後景へ退かせられている。
氏名の一部が判読できる箇所がある一方、他の欄では人数・区分記号・整理番号のみが残され、名簿としての外形を保持しながら個人ごとの後続処理をたどるために必要な部分だけが選択的に覆われたものと推認される。

頁末注記には、例外対象については別記対象取扱規程による旨の参照が残されており、通常記載に収まる者と規程上別記へ回される者とを分ける前段階の管理頁として理解すべきである。
よって、本頁は修了者全体を示す名簿であると同時に、その一部が通常とは異なる枠組みで後続処理へ接続されていたことを示す入口資料として扱うことが適当である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 13,
    pageIdRaw: "Phase3(13)",
    searchWords: ["第6教育寮修了者一覧"],
    imagePrompts: [],
    pdfs: ['/pdf/dorm-6-alumni.pdf'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "84255",
    slug: "record-notation",
    path: "/record-notation-84255",
    title: "別記対象取扱規程",
    body: `第一条　本規程は、通常台帳、修了者記録、観察記録及び処遇記録の何れにも直接接続させることが適当でない対象について、その記録上の取扱いを定めるものである。
当該対象は通常の修了者と同列に整理してはならず、別記対象として抽出し、独立した記録系統において管理するものとする。氏名、在籍経路その他通常の識別事項は本体記録上において秘匿し、記録線上の接続は別記番号又は照合記号によって代替する。

第二条　別記対象とは、通常の修了者記録の範囲内では一貫した取扱いが困難であり、独立補遺への移行を要すると判断された対象をいう。通常台帳における継続記載を行わず、必要な範囲に限り本体記録との照合を後段階における確認が必要な場合にのみ維持するにとどめる。

第六条　別記対象に関する氏名、名義、写真その他個体識別に直結する情報は、本体記録上で秘匿し照合表又は補遺番号による代替表示を用いる。
通常台帳からは当該対象の存在自体が完全に消去されるわけではなく、修了者記録とは別枠の処理対象が存在したことのみが読み取れる程度に留めるものとする。

第八条　本規程に基づき別記対象として整理された記録は、その後の処理が完結した場合であっても、通常の修了者記録へ当然に復帰するものではなく、特別な対象を通常の修了者とは別枠で保持するための恒常的整理方法として運用するものとする。
なお、別記対象の詳細については別記対象照合表を参照されたい。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 14,
    pageIdRaw: "Phase3(14)",
    searchWords: ["別記対象取扱規程"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "81888",
    slug: "1",
    path: "/1-81888",
    title: "移管補遺 1",
    body: `本補遺は、通常記録群から切り離された後段整理資料の一部として保存されている。
対象の氏名欄は全面的に黒塗り処理されており、通常台帳上の名義との直接照合はこの時点では不可能であるが、「処置継続」「再測定」「別名義整理」といった語が断片的に残されており、継続的な介入と記録再編の双方を前提とする別系統処理下に置かれていたことが確認される。

「別名義整理」の記載は通常の誤記訂正とは性質を異にし、「処置継続」及び「再測定」と並置されている以上、対象を既存の名義線から切り離し別の識別単位として再接続する工程であると解される。
対象名・従前記録番号・照合前欄はほぼ全面的に抹消されている一方、処置状況・再測定欄・名義整理に関する語句のみが残されており、本補遺全体からは[R:4:別人格化に近い状態を制度上固定しようとする処理]の気配が強く立ち上がる。

本補遺はそれ自体で完結しておらず、当該対象に関する名義整理及び処置経過の全体像は移管補遺2へ引き継がれており、本資料単独では処置経過を完結的に把握することはできない。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 15,
    pageIdRaw: "Phase3(15)",
    searchWords: ["移管補遺1","移管補遺"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "15458",
    slug: "2",
    path: "/2-15458",
    title: "移管補遺 2",
    body: `本補遺は、既存記録群から切り離された後段整理資料の一部として保存されている。
先行補遺と比較すると写真欄の欠損はさらに増加しており、顔貌記録も大半が剥離・抹消・黒塗りにより判読不能となっている。
氏名欄・名義欄・過去記録番号の黒塗り範囲も拡大しており、同一欄内に訂正痕・上書痕・差替え記号が混在していることから、処遇の一環として識別情報そのものが書き換えられていた可能性が高い。

残存しているのは移管、照合、別記、補遺整理、再接続といった制度的語句が中心であり、外見・氏名・照合前番号等の元の個体性を直結的に示す情報ほど強く抹消される一方で処理状態を示す情報だけが断片的に残されている。
これは対象の実体を消した後にもなお制度上の処理履歴だけは通す必要があったことを示す。

補遺末尾には、断片化された名義、番号及び処理状態が最終的には別記対象照合表の照合系統に集約されることを示す接続線が残されており、本補遺は対象の実像を失わせながらも制度上は追跡可能な形へ組み替えていく中間資料として理解するのが相当である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 16,
    pageIdRaw: "Phase3(16)",
    searchWords: ["移管補遺2","移管補遺"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "51330",
    slug: "6-a",
    path: "/6-a-51330",
    title: "記録：第6教育寮対象A",
    body: `個体識別子：■■■■
個体呼称：■■■■
性別：■■■■
生年月日：■■■■
入信日：■■■■

本対象に関する氏名・出自・入信経緯その他の基礎情報は全項目が黒塗り処理されており、通常名義による個別特定は不可能である。
記録保持上の理由については別途管理文書に委任されている。

第6教育寮課程修了対象として継続観察が実施された。
観察評価における主要項目は応答均質化、感情起伏の減少及び対人印象の維持であり、複数の観察時点にわたり反復して記録されている。

対人場面における返答の揺れが次第に縮小し、表情変化・語調・視線反応を含む反応振幅が抑制された状態へ収束している。
外部から見た印象変動が少なく、扱いやすい応答様式が定着しつつあると評価された。

応答様式の均質化が進行し、感情起伏の表出は大幅に減少した。
外部観察者からみた印象の安定性が高水準に達しており、継続的な管理環境下での運用に適合する状態として整理された。

本対象については教育寮内における特段の逸脱事案は記録されていない。
黒塗り処理の範囲が広く、個別の経緯を追跡することは困難であるが、課程上の経過としては標準的な推移をたどったものとみられる。

「[R:4:奉仕者選定記録]」との照合注記が付されており、本記録は選定判断への前段資料として接続される位置付けであった。

選定先への引渡可否については本記録単独では確定されておらず、後続照合資料への委任扱いとして処理された。

匿名処理が施された対象であり、記録者として評価を付すべき基礎情報を欠く。
本記録は観察過程の断片的な痕跡を留めるにとどまり、個体としての最終処遇は後続照合系統によって決定されたものと解される。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 17,
    pageIdRaw: "Phase3(17)",
    searchWords: ["第6教育寮対象A","第6教育寮対象"],
    imagePrompts: [],
    images: ['/images/photo-6-a.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "64856",
    slug: "6-b",
    path: "/6-b-64856",
    title: "記録：第6教育寮対象B",
    body: `個体識別子：■■■■
個体呼称：■■■■
性別：■■■■
生年月日：■■■■
入信日：■■■■

本対象に関する氏名・出自・入信経緯その他の基礎情報は全項目が黒塗り処理されており、通常名義による個別特定は不可能である。
本記録は記録保持上の必要から断片的に残されたものであり、完全な再構成には後続照合資料を要する。

第6教育寮課程修了対象として継続観察が実施された。
発話制御、指示定着及び長時間管理下における安定性の各項目が比較的良好であると整理されている。

別記対象との接触後、再調整措置が実施された記録あり。
接触関係が応答状態又は管理判断に一定の影響を与えていた可能性が補遺上指摘されている。

反復指示系統への応答の揺れは小さく、長時間管理下でも態度の崩れが少ない。
ただし特定対象との接触を介した変動可能性を内包した個体として評価された。

接触由来の変動要因が確認された点は管理上の注記事項として記録されているが、再調整後は応答が一定の水準に回復したとされる。
個体の安定性はおおむね維持されたと評価されるものの、外部要因への感受性は留意点として保持されている。

「[R:4:外地奉仕補遺]」への記録移管が本記録末尾に明記されており、後続処理は通常台帳ではなく補遺系統へ引き継がれた。

当該記録は教育寮内観察として完結せず、補遺系統分岐記録として別途管理される扱いとなった。

匿名処理の範囲が広く個別評価を行う情報を欠く。
ただし補遺系統への移管という経路は、当該個体が後続処理における追跡対象として位置付けられていたことを示すものと理解できる。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 18,
    pageIdRaw: "Phase3(18)",
    searchWords: ["第6教育寮対象B","第6教育寮対象"],
    imagePrompts: [],
    images: ['/images/photo-6-b.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "95823",
    slug: "6-c",
    path: "/6-c-95823",
    title: "記録：第6教育寮対象C",
    body: `個体識別子：■■■■
個体呼称：■■■■
性別：■■■■
生年月日：■■■■
入信日：■■■■

本対象に関する基礎情報は全項目が黒塗り処理されており、通常名義による個別特定は不可能である。
記録全体として断片的であり、在籍記録・観察記録・補遺記録が完全には接続していない。

第6教育寮課程修了対象として継続観察が実施されたが、記録の継続性が保たれておらず、処理経過の全体像の把握が困難な状態にある。

観察欄末尾に「別名義管理継続」「照合は後段階」との記載が明確に残されており、人格矯正及び名前の書換えが並行して進められていた可能性が示唆されている。
同一個体を異なる名義単位で継続処理していた形跡があり、通常台帳から切り離した上で別名義として再整理されていた可能性が高い。

照合作業は本記録の時点で未了とされた。
別名義管理が進行した経緯については補遺側の記録に委任されており、本記録の段階では確定的な整理がなされていない。

記録の断片性が著しく、課程中の具体的な観察内容を確認できる部分が限られる。
名義管理の変更を伴う対象として取り扱われていた点が唯一明確に読み取れる事項である。

「別記対象照合表」への参照が記録末尾に付されており、本記録は照合未了段階の中間資料として位置付けられている。

照合処理の最終的な集約は後続資料へ先送りとされており、本記録単独では処理完結しない構成となっている。

本記録は情報量が著しく乏しく、記録者として評価し得る根拠を欠く。
別名義処理が並行していたという事実のみが後続照合において参照価値を有するものと考えられる。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 19,
    pageIdRaw: "Phase3(19)",
    searchWords: ["第6教育寮対象C","第6教育寮対象"],
    imagePrompts: [],
    images: ['/images/photo-6-c.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "54280",
    slug: "volunteer-log",
    path: "/volunteer-log-54280",
    title: "奉仕者選定記録",
    body: `本記録は、第6教育寮課程修了者のうち一部対象が通常の修了整理とは別に次段階の処理系統へ振り分けられていたことを示す選定資料である。
当該選定は教育的到達度又は本人の希望ではなく、応答の安定、観察結果及び管理負担の軽さといった取扱容易性を主要基準として実施されていたものと認められる。

判読可能な範囲では選定理由として、指示に対する応答の均質性、観察下における反応変動の少なさ、及び個別対応の負担軽減に関する記載が反復しており、管理上不確定要素の少ない者を抽出する工程として運用されていた疑いが強い。
記録全体を通じて教育課程の終点として通常重視されるべき事項への言及は乏しく、文書の重心が教育から管理へ大きく傾いていることが確認される。

本記録には外地奉仕補遺への参照線が明確に伸びており、選定工程が内部区画内で完結していなかったこと、及び修了後処理の一部が外地に接続する別系統制度へ組み込まれていた可能性が示されている。
よって、本件は修了者管理の名目を取りつつ、実質的には選別及び後続移行のために作成された接続資料として扱うことが適当である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 20,
    pageIdRaw: "Phase3(20)",
    searchWords: ["奉仕者選定記録"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "03573",
    slug: "nishiizu-service",
    path: "/nishiizu-service-03573",
    title: "外地奉仕補遺",
    body: `本補遺は、通常記録群から切り離された補足資料として整理されている。
文面の大半は黒塗り処理により判読不能であるが、残存箇所からは「外地」の語が繰り返し確認でき、共同体内部のみで完結する運用を前提としていなかったことがうかがえる。

「現地受入」に関する記述が責任区分・引継・補遺整理と並置されている点から、到着確認だけでなく移送後の管理主体が外部側へ移ることまでを含んだ処理が予定されていたと解される。
対象名・経路・日付はほぼ全面的に抹消されている一方、「移管後記録欠損」という文言が判読可能であることから、対象が別系統へ移された後に通常台帳上の追跡可能性が大きく失われていたことは否定し難い。

「奉仕」という語はそれ以前の生活要領及び選定記録においてすでに繰り返し現れているが、本補遺において「外地」と結合することで、従来の内部管理とは質的に異なる工程へ対象が移行したことが初めて明示される。
本補遺は国内記録の終点として機能しており、これまでの管理工程の先に国内外にわたる別系統の処理が組み込まれていたことを示す最初の痕跡資料として扱うことが適当である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 21,
    pageIdRaw: "Phase3(21)",
    searchWords: ["外地奉仕補遺"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "24578",
    slug: "notation-guide",
    path: "/notation-guide-24578",
    title: "別記対象照合表",
    body: `本表は、通常台帳に記載されない別記対象について、名義差異、別名義管理の有無及び照合状況を確認するために作成された内部照合資料である。
記載対象の大半は黒塗り処理が施されているが、「別名義管理」「別記対象」「照合済」「補遺参照」「通常台帳不接続」等の語が反復して記されており、名義又は人格単位そのものを分離した上で処理していたことが推認される。

判読可能な範囲では、複数の対象について通常記録上の名義と別記側における名義とが一致しておらず、独立した名義として再整理したことを前提とする形式となっている。
なお、断片的に残された記載の一つとして「[R:4:神田愛]」の名義が確認でき、周辺欄に「別名義管理」「照合済」「別記対象」の記載が判読可能な形で残されている。

本表には「原名義」「現管理名義」「照合番号」「補遺系統」「通常台帳接続可否」に相当する欄が独立して設けられており、同一対象を複数の名義及び記録系統で並行管理するための基盤文書として機能していたと解される。
よって、本表は別記対象取扱規程に基づいて分離管理されてきた対象群の照合を集約する最終的な整理資料として扱うことが適当である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 22,
    pageIdRaw: "Phase3(22)",
    searchWords: ["別記対象照合表"],
    imagePrompts: [],
    pdfs: ['/pdf/record-notation.pdf'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "86457",
    slug: "profile-tono",
    path: "/profile-tono-86457",
    title: "記録：長谷川美咲",
    body: `個体識別子：5-001
個体呼称：長谷川美咲(はせがわ みさき)
性別：女
生年月日：1998年 4月 17日
入信日：2016年 9月 3日

入信時18歳。
家庭環境に関する記載は乏しいが、入信以前より人目を引く外見と落ち着いた物腰を有していたとの所見が初期記録に付されている。
自発的に信仰活動へ参加した経緯が確認されており、組織への抵抗感が当初から低い個体であったと把握された。

第6教育寮課程修了者。
同区分内では比較的若年の個体に属するが、表情維持・声量・視線反応の各要素が年齢帯に比して安定しており、早期段階から対人場面での反応一貫性が高い対象として評価された。

継続観察において、感情反応の起伏が次第に抑制され、外見印象にも大きな変動が見られなかった。
面談記録では応答の定型化が比較的早いとの所見が付されている。

対人場面における返答の揺れが縮小し、外部から見た反応差異が目立たなくなっていった。
応答の安定性は課程を通じて高水準に保たれており、別記録上、[R:4:神田愛（かんだ あい）]の名義との照合情報が付されている。

課程中に目立った問題行動の記録はなく、個別介入の頻度も標準以下に抑制された。
対人印象の一貫性が高く、管理運用上の負担が小さい個体として位置付けられていた。

第5期渡航巡礼対象として選定され、[R:4:出航記録2024-06-07]に組み込まれた。

現地側への引渡が完了したものと記録されており、受渡後の詳細経過については後続資料に委任されている。

応答安定性及び対人印象の維持水準はともに高く、処置後の経過も良好であった。
[R:4:渡航巡礼]対象としての適合性は高位にあると評価される。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 23,
    pageIdRaw: "Phase3(23)",
    searchWords: ["第6教育寮課程修了者","長谷川美咲","神田愛"],
    imagePrompts: [],
    images: ['/images/photo-hasegawa-misaki.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "14901",
    slug: "profile-shiku",
    path: "/profile-shiku-14901",
    title: "記録：栗原里奈",
    body: `個体識別子：5-002
個体呼称：栗原里奈(くりはら りな)
性別：女
生年月日：1997年 11月 22日
入信日：2016年 4月 14日

入信時18歳。
知人の紹介を経由して入信した旨が記録されており、組織外の交友関係が入信の経路となっていたことが確認される。
入信以前より他者に対する配慮や従順な気質が周囲に認識されていたとの記載が残っている。

第6教育寮課程修了者。
受答えの素直さ・指示追従性・応答内容の均質さ・外見印象の維持が比較的安定した個体として評価されており、対人場面における反応振幅が小さい対象とされた。

再教育後に情動表出の平板化が進行し、介入後の応答速度にも改善が認められた。
対人場面を前提とした条件への適合性が高い旨の注記が付されている。

年齢相応の反応の揺れを一定程度残しつつも、継続観察下での予測可能性は高まっており、外見印象・姿勢・受答えを含む外的応答の一貫性が安定して保たれていた。

課程の進行に伴い、自発的な意見表明の頻度が顕著に減少した。
応答内容が次第に定型化し、外部刺激に対する反応が均質になったとの所見が複数回にわたって記録されている。
個別調整を要せず管理上の負担が小さい個体として整理された。

第5期渡航巡礼対象として選定され、出航記録2024-06-07に組み込まれた。

現地側への引渡が完了したものと記録されており、受渡後の詳細経過については後続資料に委任されている。

指示追従性が高く処置後の経過も安定していた。
当初から温順な気質を有していた個体であり、課程適応の観点からは典型的な修了事例と評価される。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 24,
    pageIdRaw: "Phase3(24)",
    searchWords: ["第6教育寮課程修了者","栗原里奈"],
    imagePrompts: [],
    images: ['/images/photo-kurihara-rina.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "23655",
    slug: "profile-sonoda",
    path: "/profile-sonoda-23655",
    title: "記録：結城春香",
    body: `個体識別子：5-003
個体呼称：結城春香(ゆうき はるか)
性別：女
生年月日：2000年 2月 8日
入信日：2018年 7月 19日

入信時18歳。
入信は自発的とされているが、保護者との関係に関する記録が存在せず、家庭状況の詳細は不明である。
入信以前の外部との関係は限定的であり、入信後に活動への参加が急速に定着した経緯が記録されている。

第6教育寮課程修了者。
比較的若年の区分に属するが、外見印象・姿勢維持・対人場面における応答持続性が安定した個体として評価されており、長時間管理下でも反応の崩れが少ないと記録された。

介入後においても視線移動及び発話内容の変動幅は小さく、応答調整が容易であった。
表情変化の抑制度合いが安定して継続しており、年齢帯を踏まえても印象維持の水準が高いと評価された。

長時間の管理環境下においても表情・視線・姿勢・発話応答の各要素が一定の範囲に収まり続けており、対人印象の変動が比較的少ない対象として整理された。

若年であるにもかかわらず長時間管理下での安定性が高い点は特筆に値する。
課程中に特段の問題行動の記録はなく、指示受容から応答定着に至る経過が短期間で完了した点が観察担当者の所見として繰り返し言及されている。

第5期渡航巡礼対象として選定され、出航記録2024-06-07に組み込まれた。

現地側への引渡が完了したものと記録されており、受渡後の詳細経過については後続資料に委任されている。

年齢に対して反応安定性が際立って高く、処置後の経過においても顕著な乱れが認められなかった。
今後の同種事案における参照基準として有用な記録を残した個体と評価される。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 25,
    pageIdRaw: "Phase3(25)",
    searchWords: ["第6教育寮課程修了者","結城春香"],
    imagePrompts: [],
    images: ['/images/photo-yuuki-haruka.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "06985",
    slug: "profile-tachibana",
    path: "/profile-tachibana-06985",
    title: "記録：相沢大輔",
    body: `個体識別子：6-001
個体呼称：相沢大輔(あいざわ だいすけ)
性別：男
生年月日：1995年 6月 30日
入信日：2015年 3月 11日

入信時19歳。
入信以前より体力面での評価が高く、組織内活動において肉体的な奉仕が求められる場面に積極的に参加していたとの記録がある。
信仰への傾倒よりも共同生活への適応を優先した行動傾向が初期から観察されていた。

第6教育寮課程修了者。
基礎体力・持久性・反復指示への定着率が比較的高く、定型的な作業環境または継続的な指示環境下での安定した応答が評価された。

継続観察後に自発発話の減少が確認され、逸脱行動および情動反応の表出は限定的であった。
反応形式が一定の範囲へ収束し、予測可能性が高まったと整理されている。

単独判断を要する場面での反応は比較的弱いが、指示系統が明確な状況下では行動維持が安定する傾向があると評価された。

課程中において周囲との交流を最小限に留め、指示された事項のみを反復する傾向が強まった。
自発的発話の減少に伴い、管理者との応答関係が定型化し、個別調整の頻度が低下した旨が継続記録に残されている。

第6期渡航巡礼対象として選定され、出航記録2024-09-18に組み込まれた。

現地側への引渡が完了したものと記録されており、受渡後の詳細経過については後続資料に委任されている。

体力面での適性は高く、継続的な指示環境下における運用実績も良好であった。
単独判断能力の低下は管理側にとって安定要素として機能しており、選定判断の妥当性は高いと評価される。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 26,
    pageIdRaw: "Phase3(26)",
    searchWords: ["第6教育寮課程修了者","相沢大輔"],
    imagePrompts: [],
    images: ['/images/photo-aizawa-daisuke.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "88851",
    slug: "profile-masumura",
    path: "/profile-masumura-88851",
    title: "記録：大貫悠太",
    body: `個体識別子：6-002
個体呼称：大貫悠太(おおぬき ゆうた)
性別：男
生年月日：1996年 8月 14日
入信日：2016年 1月 27日

入信時19歳。
入信前は技術系の職業訓練課程に在籍していたとの記録があり、作業習得への適応力が高い素地を有していた。
課題への取り組み姿勢は真面目とされており、指示された内容を丁寧に遂行する気質が初期段階から観察されていた。

第6教育寮課程修了者。
作業理解力及び環境順応性が比較的高く、補助的業務環境への適合性を有する対象として評価された。
環境条件が変化する場面においても運用上の支障を生じにくいとされた。

環境変化への初期反応は残るが安定化が早く、再教育後も指示受容性が維持され逸脱行動が少なかった。
介入後には形式的返答が増加し管理上の不確定要素が減少したと記録されている。

応答形式の均質化が進行し、作業理解力・環境順応性と合わせて継続観察下での予測可能性が高まった対象として整理された。

入信前から有していた作業適応力が課程中においても維持・強化された点は管理上の好材料として記録されている。
環境変化への初動反応はあるものの、定着が速いため再介入の頻度を抑制できた。

第6期渡航巡礼対象として選定され、出航記録2024-09-18に組み込まれた。

現地側への引渡が完了したものと記録されており、受渡後の詳細経過については後続資料に委任されている。

作業理解力と環境順応性が相補的に機能しており、補助業務系の配置において高い実用性を示すと予想される。
課程修了後の処遇適合性は標準以上と評価される。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 27,
    pageIdRaw: "Phase3(27)",
    searchWords: ["第6教育寮課程修了者","大貫悠太"],
    imagePrompts: [],
    images: ['/images/photo-onuki-yuta.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "01429",
    slug: "profile-tsurumi",
    path: "/profile-tsurumi-01429",
    title: "記録：白井真由",
    body: `個体識別子：6-003
個体呼称：白井真由(しらい まゆ)
性別：女
生年月日：1998年 1月 5日
入信日：2016年 6月 22日

入信時18歳。
入信前より容貌と対人印象が高く評価されており、初対面の相手に対して安定した印象を与えることができる個体として入信段階から注目されていた。
信仰活動への参加姿勢は積極的であり、組織内での評価が早期に形成された。

第6教育寮課程修了者。
対人応答性・外見印象・指示定着の各項目がいずれも高水準であり、早期の段階から優先対象として名簿に記載されていた。

面談後に情動反応の平板化と受答え内容の定型化が進行し、継続観察においても対人場面での反応品質は概ね維持された。
遠野紗季の区画変更以後に一時的な応答低下が認められたが、再調整後に安定域へ復帰した。

補遺において遠野紗季との接触履歴が反応変動に影響した可能性が指摘されており、単独個体の安定記録にとどまらず特定接触関係を含めた連動記録としての性格を有する。

遠野紗季との接触に起因する応答低下が一時的に記録されたが、区画分離と再調整によって安定域への復帰が確認された。
この点は外部接触要因への感受性として注記されるべき事項であり、引続き管理上の留意点として保持される。

第6期渡航巡礼対象として選定され、出航記録2024-09-18に組み込まれた。

現地側への引渡が完了したものと記録されており、受渡後の詳細経過については後続資料に委任されている。

対人応答性と外見印象の水準が一貫して高く、処置後の回復力も良好であった。
接触関係による変動リスクを除けば、処遇適合性において優良な記録を持つ個体と評価される。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 28,
    pageIdRaw: "Phase3(28)",
    searchWords: ["第6教育寮課程修了者","白井真由"],
    imagePrompts: [],
    images: ['/images/photo-shirai-mayu.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "41321",
    slug: "profile-fukuoka",
    path: "/profile-fukuoka-41321",
    title: "記録：遠野紗季",
    body: `個体識別子：6-004
個体呼称：遠野紗季(とおの さき)
性別：女
生年月日：1996年 3月 26日
入信日：2015年 10月 9日

入信時19歳。
入信前の記録は断片的であるが、感受性が強く周囲の影響を受けやすい気質を有していたとされる。
入信後も人間関係への依存傾向が観察されており、特定個体との接触が応答傾向に影響を与えることが早期から懸念された。
別記録上、榊原澄（さかきばら すみ）との照合情報が付されている。

第6教育寮内で長期観察対象として扱われており、継続的な介入記録を有する個体として複数記録上に反復して出現している。

一時期に応答安定性の改善が認められたが、後期記録では情動反応の残存・反応の不均衡・対人接触後の変動が再確認されており、判断未収束のまま推移した。
独立補遺扱いとされ別系統記録へ移管された。

改善所見と再変動所見が同一記録内に併存しており、最終的な安定性評価が確定されないまま通常台帳から切り離された。

白井真由との接触後に応答変動が観察されたことから、区画変更が実施された。
しかし安定性の回復は不完全であり、課程終了時点においても情動反応の残存が確認されていた。
管理側の判断としては留保が付されたまま出航選定へ接続した形となっている。

第6期渡航巡礼対象として選定され、出航記録2024-09-18に組み込まれた。

搬送途中に重度発作が発生し、現地到着後に死亡確認に至った。
当該個体に係る記録は受渡未了扱いとして別記処理へ移管された。

安定性評価が未収束のまま選定された点は管理判断上の瑕疵として認識されるべきであり、搬送中の異常発生との関係は否定できない。
本記録は今後の選定基準見直しにおける参照事例として保存される。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 29,
    pageIdRaw: "Phase3(29)",
    searchWords: ["遠野紗季"],
    imagePrompts: [],
    images: ['/images/profile-tono-record.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "86310",
    slug: "pilgrimage-overview",
    path: "/pilgrimage-overview-86310",
    title: "渡航巡礼について",
    body: `福音継承教育会では、第6教育寮の教育課程を修了した方を対象として、海外における奉仕活動と祈りの学びを兼ねた「渡航巡礼」を実施しております。
本研修は、共同体の中で培ってきた姿勢を広い世界の中で実践し、異なる環境に身を置きながら、奉仕の心と隣人へのまなざしをあらためて深めることを目的とするものです。

参加にあたっては、ご本人の意思を大切にしつつ、心身の状態、適性、受入先の体制などを総合的に確認した上で、教育寮責任者および現地受入担当者との協議を経て決定いたします。
研修の実施に際しては、参加者が安心して過ごせるよう、安全面、生活面、学びの面において必要な支援体制を整えています。

渡航先や日程、参加者の構成は、各回ごとに祈りと準備を重ねながら定めています。
また、活動の記録については、参加者の安全と個人情報保護への配慮を第一に、適切に管理しております。
公開する内容は必要な範囲に限り、詳細については関係者間で共有する形を取っています。

初回の渡航研修は2014年5月18日に実施されました。
その後も、受入環境や運営体制を十分に確認しながら、不定期に継続しております。
今後も、一人ひとりにとって実りある学びと奉仕の機会となるよう、丁寧に歩みを重ねてまいります。
`,
    pageType: "HP",
    siteType: "main",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 1,
    pageIdRaw: "Phase4(1)",
    searchWords: ["渡航巡礼"],
    imagePrompts: [],
    images: ['/images/photo-toono-saki.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "72552",
    slug: "1",
    path: "/1-72552",
    title: "第1回渡航巡礼",
    body: `福音継承教育会では、所定の教育課程を修了した参加者を対象に、海外における奉仕活動と学びの機会を兼ねた研修「渡航巡礼」を実施しています。
本研修は、共同体で培った姿勢を外部環境の中で実践し、他者との関わりを通じて理解を深めることを目的としています。

参加にあたっては、本人の希望を前提とし、体調、適性、現地受入体制等を踏まえた上で選考を行います。
実施に際しては、団体責任者及び現地受入担当者の確認を経て、安全面及び生活面の支援体制を整備します。

渡航先、日程及び参加者構成は各回ごとに決定します。
活動記録は団体内で保管し、公開にあたっては参加者の安全及び個人情報保護の観点から、必要な範囲に限って案内します。

第1回の海外奉仕研修は2014年5月18日に実施されました。
その後も、受入環境及び運営体制を確認しながら、継続的な実施を予定しています。
`,
    pageType: "HP",
    siteType: "main",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 2,
    pageIdRaw: "Phase4(2)",
    searchWords: ["渡航巡礼"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "52336",
    slug: "2013-01-29",
    path: "/2013-01-29-52336",
    title: "出航記録 2013-01-29",
    body: `出航日程：2013年 1月 29日
出航先：フィリピン
出航人数：1 名

当該工程においては長谷川亘の1名が第1期対象として渡航巡礼した記録である。

本行程は福音継承教育会による渡航巡礼の初回実施に係る記録であり、第1期対象者として選定された長谷川亘の移送及び引渡の経過を記録するものである。
実施にあたっては、事前選定、処置、船内管理及び現地引渡の各段階が順次実施された。

長谷川亘の選定理由としては、従順性が高く指示に対する反応が安定していたことが挙げられる。
課程記録においても継続的に指示追従性が良好と評価されており、引渡対象としての適格性は一定の水準を満たすものとして判断された。
船内においては安静措置が適用され、行動統制は概ね維持されていたものと記録されている。
引渡時の引継については現地側との照合を経て完了扱いとされた。

現地到着後まもなく、当該個体の容体が急変し、死亡確認に至った旨の報告が現地責任者より受理された。
なお、事前記録には環境順応性に課題ある旨の所見が反復して付されており、当該脆弱性と結果との関連については検証の余地がある。

渡航先における当該個体の処遇については、引渡後の継続記録が存在しないため、受渡完了後の取扱いを遡及確認することはできない状態にある。
以後、本件記録はHP掲載対象外として処理された。

本件は第1期渡航巡礼における初例であり、事前に環境順応困難の所見が付されていた個体が短期間で死亡確認へ至った点において、後続行程の選定基準及び処置手順の整備に対して参照事案としての性格を有する。

本行程記録末尾には、次回行程として2016年10月20日が付記されており、本件は連続案件の一部として位置付けられる。
初回実施にて重大結果が生じたにもかかわらず、後続行程が予定どおり継続された事実は、本会における渡航巡礼の制度的継続性を示すものである。

記録担当者としては、本件において環境脆弱性に係る事前所見が選定判断に十分反映されなかった点を今後の選定基準整備上の課題として付記する。
選定評価と移送実施との間に安全余裕を設けることの必要性は、本件を端緒として認識されるべきである。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 3,
    pageIdRaw: "Phase4(3)",
    searchWords: ["渡航巡礼","出航記録"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "80693",
    slug: "profile-hasegawa-w",
    path: "/profile-hasegawa-w-80693",
    title: "記録：長谷川亘",
    body: `個体識別子：1-001
個体呼称：長谷川亘(はせがわ とおる)
性別：男
生年月日：1987年 9月 12日
入信日：2009年 5月 7日

入信時21歳。
入信前より内向的な性格を有していたとされ、集団生活への移行は比較的円滑であったと初期記録に記載されている。
環境変化に対して慎重な対応を示す傾向があり、この点は課程における継続的な注記事項となった。

第6教育寮課程修了者。
従順・寡言・持久性ありとの所見が付されており、継続管理下で大きな逸脱を示しにくい個体として把握された。
ただし環境変化への順応に難があるとの評価が複数回記録されている。

環境移行時および条件変更時の反応に一定の脆弱性が早期から認識されており、基礎的な管理安定性と並行して注記されていた。

初期記録では従順性・持久性ともに安定していると評価されたが、環境順応困難との所見が反復して記録された点は継続的な課題として把握された。

環境変化への反応として固着行動や動作停止が複数回確認されており、環境移行を伴う運用場面では個別対応が必要であったとの注記が残されている。
従順性という強みと環境脆弱性という弱みが並立したまま課程を終えた個体である。

第1期渡航巡礼対象として2016年1月29日付行程に組み込まれた。

現地において死亡確認に至った。
詳細経緯を記した別紙は現存せず、死亡確認に至る連続経過を追跡することができない不完全終結記録として扱われている。

環境脆弱性が最終的な結果に関与した可能性は否定できないが、記録欠損により検証の手段を失っている。
第1期事案の初例として後続選定基準の参照元となるべき記録であるが、詳細欠損による参照困難な状態にある。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 4,
    pageIdRaw: "Phase4(4)",
    searchWords: ["長谷川亘"],
    imagePrompts: [],
    images: ['/images/photo-hasegawa-wataru.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "40375",
    slug: "2013-10-20",
    path: "/2013-10-20-40375",
    title: "出航記録 2013-10-20",
    body: `出航日程：2013年 10月 20日
出航先：フィリピン
出航人数：3 名

当該工程においては水原恒一・野上玲子・真鍋俊介の3名が第2期対象として渡航巡礼した記録である。

本行程は第1期事案（長谷川亘、死亡確認）を受けて手順を再整理した上で実施された第2期渡航巡礼の第1回行程に係る記録である。
3名の移送・引渡及び船内管理の経過を記録するものとし、前回事案の反省を踏まえた投薬管理の徹底及び観察記録の詳細化が当行程における主要改訂点として位置付けられた。

水原恒一については長期滞在下における生活安定性及び応答均質性を選定理由とし、引受区分は長期配置適合枠として整理された。
船内においては投薬管理下の安静が維持され、行動に特段の異常は記録されていない。
引渡時は現地担当者との照合を経て受領確認が完了した。

野上玲子については対人応答性の高さ及び受答えの均質さを選定理由とし、引受区分は対人業務枠として整理された。
船内での反応は安定しており、観察記録に特段の懸念事項は記載されていない。
引渡手続は水原恒一と同一工程にて完了した。

真鍋俊介については現地作業適性及び反復作業への耐性を選定理由とし、引受区分は現地作業補助枠として整理された。
船内記録においては落ち着いた状態が維持されており、投薬管理後の応答変動も観察範囲内にとどまった。
引渡完了。

渡航先における当該3名の処遇については、各引受区分に対応した配置先への引継が完了したものと記録されている。
受渡後の継続記録は本件文書の対象外とする。

前回事案（長谷川亘）を踏まえて整備された観察記録詳細化は、本行程において概ね機能し、異常兆候の早期検知という観点からも有効であったと判断される。
複数名での同時移送は管理負担を増すが、投薬管理及び区分別対応の組み合わせにより安定的に実施できることが確認された。

記録担当者としては、前回事案の教訓が本行程において適切に反映されたものと評価する。
ただし、観察記録の詳細化は移送成立の確実性向上を主目的とするものであり、選定判断における脆弱性評価の精度向上については引き続き課題として認識されるべき旨を付記する。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 5,
    pageIdRaw: "Phase4(5)",
    searchWords: ["出航記録","2013-10-20","2013年10月20日"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "63888",
    slug: "profile-mizuhara",
    path: "/profile-mizuhara-63888",
    title: "記録：水原恒一",
    body: `個体識別子：2-001
個体呼称：水原恒一(みずはら こういち)
性別：男
生年月日：1988年 7月 3日
入信日：2010年 2月 18日

入信時21歳。
入信前は規則正しい生活習慣を維持しており、集団生活に無理なく適応したとされる。
自己主張が乏しく周囲の指示に従う傾向が強かったと入信段階の記録に記載されており、組織側からの期待対象として早期に認識されていた。

第6教育寮課程修了者。
従順性が比較的高く生活リズムの乱れが少ない個体として評価されており、継続管理環境の下で日常行動の変動幅が小さい対象とされた。

再教育後に応答内容の揺れが減少し、反復指示への定着が良好であったと記録されている。
介入後においても目立った抵抗反応は認められなかった。

従順性・生活リズムの安定・応答内容の均質化が相互に補完し合い、継続観察下での管理安定性が比較的高いと判断された対象として整理された。

課程中に問題行動の記録は一切存在せず、介入回数も最小限にとどまった。
管理側の判断としては最も運用負担の少ない部類に属する個体として評価されており、他の対象の管理方針比較においても参照される安定事例とされていた。

第2期渡航巡礼対象として選定され、出航記録2016-10-20に組み込まれた。

受渡完了として記録されており、後続処理については現地側資料に委任されている。

管理上の負担が一貫して低く、課程全体を通じて安定した推移を示した典型的な修了事例である。
選定判断の根拠は明確であり、記録の信頼性も高いと評価される。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 6,
    pageIdRaw: "Phase4(6)",
    searchWords: ["水原恒一"],
    imagePrompts: [],
    images: ['/images/photo-mizuhara-koichi.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "64341",
    slug: "profile-nogami",
    path: "/profile-nogami-64341",
    title: "記録：野上玲子",
    body: `個体識別子：2-002
個体呼称：野上玲子(のがみ れいこ)
性別：女
生年月日：1990年 5月 21日
入信日：2010年 8月 30日

入信時20歳。
入信前から礼儀正しく温和な印象を持つ個体として知人に認識されており、初対面の相手に対しても落ち着いた対応が可能であったとされる。
信仰活動への参加は自発的とされているが、家庭環境の詳細については記録が乏しい。

第6教育寮課程修了者。
対人応答時における表情維持・受答えの柔らかさ・初対面環境下における反応安定性が比較的高く、対人場面での急激な反応変動を生じにくい対象として評価された。

継続観察において感情反応の平板化が進行し、指示外発話も減少傾向が確認された。
介入後においても対人印象に大きな変動が見られなかった。

反応安定性・感情反応の平板化・指示外発話の減少が継続して記録されており、対人場面における運用安定性が高い個体として整理された。

課程中に個人的な意見や要求を示す発言が急速に減少し、後期には質問への応答も定型的な形式に収束した。
外部の観察者からみた印象の一貫性が高く、対人業務系の配置において評価の高い個体として位置付けられた。

第2期渡航巡礼対象として選定され、出航記録2016-10-20に組み込まれた。

受渡完了として記録されており、後続処理については現地側資料に委任されている。

対人場面での安定性が一貫しており、課程全体を通じて管理上の問題が少ない事例である。
対人業務区分への選定は記録に照らして妥当であると判断される。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 7,
    pageIdRaw: "Phase4(7)",
    searchWords: ["野上玲子"],
    imagePrompts: [],
    images: ['/images/photo-nogami-reiko.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "83636",
    slug: "profile-manabe",
    path: "/profile-manabe-83636",
    title: "記録：真鍋俊介",
    body: `個体識別子：2-003
個体呼称：真鍋俊介(まなべ しゅんすけ)
性別：男
生年月日：1989年 10月 15日
入信日：2011年 4月 2日

入信時21歳。
入信前は肉体労働に従事しており、体力・耐久性に優れた個体として入信段階から評価されていた。
自己主張が少なく他者の意思に従う傾向が強かったとされ、集団生活への定着が早かった旨が初期記録に記載されている。

第6教育寮課程修了者。
持久性が高く、単純作業の反復に対して疲弊または逸脱が少ない個体として評価された。
定型的な作業環境において継続的な運用が可能な対象として整理された。

面談記録において自己主張が比較的弱く管理下での動線維持も容易とされた。
処置後の反応にも大きな乱れは認められず、個別介入の頻度を抑えつつ管理可能な対象として把握された。

持久性・反復作業耐性・自己主張の弱さ・動線維持の容易性が併記されており、定型環境下での運用適合性が高い個体として評価された。

課程中において体力面での評価は一貫して高く維持された。
反復作業への耐性が処置後においても低下しなかった点は、労働系配置においては有利な所見として管理記録に残されている。

第2期渡航巡礼対象として選定され、出航記録2016-10-20に組み込まれた。

受渡完了として記録されており、後続処理については現地側資料に委任されている。

入信前からの身体的特性が課程を通じて一貫した評価根拠となっており、定型作業環境での配置適合性は高いと判断される。
自己主張の乏しさが管理上の安定要因として有効に機能した事例である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 8,
    pageIdRaw: "Phase4(8)",
    searchWords: ["真鍋俊介"],
    imagePrompts: [],
    images: ['/images/photo-manabe-shunsuke.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "44674",
    slug: "2014-02-13",
    path: "/2014-02-13-44674",
    title: "出航記録 2014-02-13",
    body: `出航日程：2014年 2月 13日
出航先：フィリピン
出航人数：2 名

当該工程においては宮坂直人・倉田美晴の2名が第2期対象として渡航巡礼した記録である。

本行程は第2期渡航巡礼の第2回行程に係る記録であり、冬期実施のため対象者数を2名に絞って実施された。
宮坂直人及び倉田美晴の移送・引渡並びに船内管理の経過を記録するものとする。

宮坂直人については身体能力の安定性及び継続配置適性を選定理由とし、引受区分は現地支援枠として整理された。
冬期の気温変化に対する順応性評価においても問題なしと判断された。
船内では安静措置が適用され、反応観察においても懸念事項は記録されていない。
引渡時の現地側照合は完了した。

倉田美晴については対人適応性・指示追従性・処置後安定度を選定理由とし、引受区分は特別配置枠として整理された。
冬期実施に伴い通常行程より搬送時間が圧縮されたが、船内記録においては投薬管理後の状態が安定しており、異常は観察されなかった。
引渡完了。

渡航先における当該2名の処遇については、各引受区分に対応した配置先への引継が完了したものと記録されている。
受渡後の追跡記録は本件文書の対象外とする。

冬期実施においては対象者数を絞ることで一人当たりの管理密度を確保する方針が有効であることが本行程において確認された。
安静措置及び反応観察を優先した移送構成は、通常期行程と同等の完了水準を達成するものであった。

記録担当者としては、冬期実施における運用縮小の判断は適切であったと評価する。
2名規模での同時移送は管理上の余裕を確保しやすく、引渡精度の維持に寄与したものと認める。
季節的条件を踏まえた定員管理の基準として本行程の実施実績を参照することを推奨する。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 9,
    pageIdRaw: "Phase4(9)",
    searchWords: ["出航記録","2014-02-13","2014年2月13日"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "28307",
    slug: "profile-miyasaka",
    path: "/profile-miyasaka-28307",
    title: "記録：宮坂直人",
    body: `個体識別子：2-004
個体呼称：宮坂直人(みやさか なおと)
性別：男
生年月日：1990年 12月 9日
入信日：2012年 3月 24日

入信時21歳。
入信前はスポーツ活動に継続的に関与しており、身体能力・持久力ともに水準以上の評価を入信段階から得ていた。
集団行動を好む傾向があり、組織内の共同活動への参加姿勢も積極的であったとされる。

第6教育寮課程修了者。
身体能力が高く、集団行動時における逸脱または遅延が少ない個体として評価された。
継続的な配置下においても運用上の支障を生じにくい対象とされた。

適応訓練後に指示への反応時間の短縮が確認され、行動修正も比較的容易であった。
訓練後経過において重大な不安定化は認められず、指示系統への均質な反応が維持された。

身体能力・集団行動時の低逸脱性・反応時間短縮・行動修正容易性が評価され、現地支援区分として受渡に適合する対象と判断された。

課程中の集団作業場面において指示への反応速度が安定して早く、周囲への同調性も高かった。
適応訓練の効果が短期間で発現したことは特筆される点であり、身体的能力が訓練効率に貢献したものと考えられる。

第2期渡航巡礼対象として選定され、出航記録2017-02-13に組み込まれた。

現地支援区分として受渡完了が記録されており、後続処理については現地側資料に委任されている。

身体能力と反応速度の組み合わせは現地支援区分において高い実用性を示す要素であり、選定の根拠は記録上明確に示されている。
課程の完遂度は高く、処遇適合性において問題のない事例と評価される。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 10,
    pageIdRaw: "Phase4(10)",
    searchWords: ["宮坂直人"],
    imagePrompts: [],
    images: ['/images/photo-miyasaka-naoto.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "13836",
    slug: "profile-kurata",
    path: "/profile-kurata-13836",
    title: "記録：倉田美晴",
    body: `個体識別子：2-005
個体呼称：倉田美晴(くらた みはる)
性別：女
生年月日：1991年 4月 16日
入信日：2012年 9月 8日

入信時21歳。
入信前から社交的な気質を有しており、初対面の相手への応答が自然であったとされる。
奉仕活動への参加頻度が高く、組織内での評価形成が早期に完了した個体として把握されていた。
環境変化に対して柔軟に対応できる素質を入信段階から示していた。

第6教育寮課程修了者。
対人適応性が高く指示追従時の態度も安定しており、環境変化への順応も比較的良好な個体として評価された。
対人配置下での反応振幅が小さく管理負担の軽い対象とされた。

再教育後に自発発話の減少と応答内容の均質化が確認された。
個別管理負担が軽い旨も記録されており、高頻度の個別調整を要しない対象として整理された。

対人適応性・環境順応性・応答内容の均質化が相互に補完し、管理下での運用安定性が高い対象として評価された。

課程を通じて対人応答の質が一定に保たれており、観察担当者からの評価も安定していた。
自発発話の減少後も対人場面での受答えの水準が維持されており、配置先での実用性を損なわない形での均質化が達成されたと記録されている。

第2期渡航巡礼対象として選定され、出航記録2017-02-13に組み込まれた。

特別配置区分として受渡完了が記録されており、後続処理については現地側資料に委任されている。

対人適応性が高く管理負担が小さい典型的な安定事例である。
特別配置区分への選定は本個体の特性に合致しており、処遇の方向性は妥当と評価される。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 11,
    pageIdRaw: "Phase4(11)",
    searchWords: ["倉田美晴"],
    imagePrompts: [],
    images: ['/images/photo-kurata-miharu.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "09154",
    slug: "2014-12-05",
    path: "/2014-12-05-09154",
    title: "出航記録 2014-12-05",
    body: `出航日程：2014年 12月 5日
出航先：フィリピン
出航人数：3 名

当該工程においては高瀬悠人・早見沙月・村瀬蓮の3名が第2期対象として渡航巡礼した記録である。

本行程は第2期渡航巡礼の第3回行程に係る記録であり、年末実施のため現地滞在期間を短縮した形式で実施された。
高瀬悠人・早見沙月・村瀬蓮の3名について、各個体の引受区分との対応を前提として選定が行われ、搬送及び引渡の完了をもって本行程の記録とする。

高瀬悠人については耐久性及び持続作業への適性を選定理由とし、引受区分は労務要員として整理された。
船内では安静管理が適用され、移送中の行動統制は概ね維持された。
引渡時には現地担当との照合を経て受領確認が完了した。

早見沙月については接遇適性及び外見評価の高さを選定理由とし、引受区分は対人業務枠として整理された。
船内記録において特段の異常は確認されず、処置後の状態安定が維持されたまま引渡に至った。
引渡完了。

村瀬蓮については雑務処理能力及び補助運用時の安定性を選定理由とし、引受区分は補助要員として整理された。
移送中の観察記録においても懸念事項は記録されておらず、引渡手続は他の2名と同行程内にて完了した。

渡航先における当該3名の処遇については、各引受区分に対応した配置先への引継が完了したものと記録されている。
年末実施に伴い受渡後の現地確認期間は短縮されており、追跡記録は簡略化されている。

年末実施に伴う行程短縮は搬送及び受渡の完了において実質的な障害とはならなかった。
区分別選定と短縮行程との組み合わせが機能し得ることが本行程において確認された。
ただし追跡記録の簡略化については、後続照合の観点から情報量が不足する状態にある。

記録担当者としては、年末実施時における行程短縮が現場管理の観点から許容範囲内であったことを確認する一方、引継後の追跡記録が最小限にとどまった点については将来的な記録整備の課題として付記する。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 12,
    pageIdRaw: "Phase4(12)",
    searchWords: ["出航記録","2014-12-05","2014年12月5日"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "80787",
    slug: "profile-takase",
    path: "/profile-takase-80787",
    title: "記録：高瀬悠人",
    body: `個体識別子：2-006
個体呼称：高瀬悠人(たかせ ゆうと)
性別：男
生年月日：1992年 3月 28日
入信日：2012年 11月 5日

入信時20歳。
入信前から体力に自信を持ち、持久的な活動に慣れていたとされる。
指示に対して素直に従う傾向が強く、集団生活においても不満を外部に表出することが少なかったと初期記録に記載されている。

第6教育寮課程修了者。
長時間行程においても態度の崩れが少なく疲労下でも指示維持が可能な個体として評価された。
継続配置における環境負荷が増した場合でも管理下の応答安定性を維持し得る対象とされた。

認知矯正後の反応観察においても大きな乱れは認められず、単純命令系統への追従性が高いとの評価が付された。
自律的判断は乏しいとされたが、管理側指示枠内への反応定着として整理された。

長時間行程下の態度安定性・疲労時の指示維持・認知矯正後の反応安定・単純命令への高い追従性を総合して労務要員区分への適合性ありと評価された。

疲労状態下における指示維持能力は課程中に繰り返し確認されており、高い再現性が記録されている。
自律的判断を要する状況への対応力の低さは労務運用においては問題化しないと評価されており、区分選定に影響を与えていない。

第2期渡航巡礼対象として選定され、出航記録2017-12-05に組み込まれた。

労務要員区分として受渡完了が記録されており、後続処理については現地側資料に委任されている。

疲労耐性と指示追従性が高く、労務要員区分への適合性は記録に照らして妥当と判断される。
自律性の低さは配置環境の選定によって補完可能であり、管理上の問題は生じにくいと評価される。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 13,
    pageIdRaw: "Phase4(13)",
    searchWords: ["高瀬悠人"],
    imagePrompts: [],
    images: ['/images/photo-takase-yuto.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "98971",
    slug: "profile-hayami",
    path: "/profile-hayami-98971",
    title: "記録：早見沙月",
    body: `個体識別子：2-007
個体呼称：早見沙月(はやみ さつき)
性別：女
生年月日：1993年 8月 11日
入信日：2013年 2月 17日

入信時19歳。
入信前から容貌の安定した印象と落ち着いた物腰が周囲に評価されていたとされる。
接遇の場面での自然な受答えが入信段階から観察されており、対人業務系の配置候補として早期に認識されていた。

第6教育寮課程修了者。
接遇時の応答姿勢が安定しており、表情管理・受答えの素直さ・外見印象の維持が高く評価された。
対人場面での反応の均質性と印象管理の安定性が認められた。

投薬管理後においても対人反応の低下は限定的であり、むしろ指示定着が早まる傾向が見られた。
処置後においても対人配置に必要な反応水準を維持し得ると評価された。

接遇時の応答安定性・表情管理・受答えの素直さ・外見印象の維持・投薬管理後の指示定着促進を総合して対人業務区分への適性ありと判断された。

投薬管理後の対人反応維持は本個体の特に注目すべき特性として観察記録に複数回記載されており、処置後の運用安定性が高い事例として位置付けられた。
表情管理の精度が課程全体を通じて低下しなかった点も選定判断に寄与している。

第2期渡航巡礼対象として選定され、出航記録2017-12-05に組み込まれた。

対人業務区分として受渡完了が記録されており、後続処理については現地側資料に委任されている。

投薬後の安定性と接遇時の印象管理が高水準で両立した稀有な事例であり、対人業務区分への適合性は記録上において最も明確に示された部類に属する。
選定の妥当性は高いと評価される。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 14,
    pageIdRaw: "Phase4(14)",
    searchWords: ["早見沙月"],
    imagePrompts: [],
    images: ['/images/photo-hayami-satsuki.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "27380",
    slug: "profile-murase",
    path: "/profile-murase-27380",
    title: "記録：村瀬蓮",
    body: `個体識別子：2-008
個体呼称：村瀬蓮(むらせ れん)
性別：男
生年月日：1991年 6月 25日
入信日：2012年 12月 3日

入信時21歳。
入信前から黙々と作業をこなす気質を有しており、不満を口にすることが少なかったと初期記録に記載されている。
組織内における雑務や補助作業への従事が自然な形で定着しており、指示された役割の枠内で安定して行動する傾向が早期から観察された。

第6教育寮課程修了者。
雑務処理能力及び反復業務への耐性が確認されており、補助的運用に適した対象として評価された。
高度な個別判断を要しない定型的作業環境で安定性を示す個体とされた。

反復教育後に応答が簡素化し、自発的判断を求めない環境において安定度が増していた。
指示に対する返答および行動選択が定型化し、管理側の指示系統への単純な応答様式が定着した。

雑務処理能力・反復業務耐性・応答簡素化・限定的指示環境下の安定性を総合して補助要員区分への適合性ありと判断された。

応答の簡素化が課程後半に顕著になり、管理者の指示への返答が単音節や定型句に収束した。
この変化は管理側にとっては予測可能性の向上として記録されており、補助要員としての運用適合性を高めた所見と整理されている。

第2期渡航巡礼対象として選定され、出航記録2017-12-05に組み込まれた。

補助要員区分として受渡完了が記録されており、後続処理については現地側資料に委任されている。

入信前から有していた補助作業への適性が課程を通じて強化されており、補助要員区分への選定は自然な帰結といえる。
管理上の問題が皆無の安定事例として記録される。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 15,
    pageIdRaw: "Phase4(15)",
    searchWords: ["村瀬蓮"],
    imagePrompts: [],
    images: ['/images/photo-murase-ren.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "13868",
    slug: "2017-08-08",
    path: "/2017-08-08-13868",
    title: "出航記録 2017-08-08",
    body: `出航日程：2017年 8月 8日
出航先：フィリピン
出航人数：3 名

当該工程においては桐生遼・長瀬美琴・秋山直哉の3名が第3期対象として渡航巡礼した記録である。

本行程は第3期渡航巡礼の第1回行程に係る記録であり、外的事情による通常経路の確保困難を受けて代替的運用措置を講じた上で実施された。
移送時間の圧縮及び処置後観察の省略化が行われており、通常時の行程記録とは一部異なる構成となっている。

桐生遼については持久性及び長時間行程への適性を選定理由とし、引受区分は労務補助として整理された。
外的事情による経路変更においても移送中の行動統制は維持され、船内観察において異常兆候は記録されなかった。
引渡時は現地担当との照合確認を経て完了した。

長瀬美琴については対人応答性の高さ及び指示定着の良好さを選定理由とし、引受区分は接遇補助として整理された。
処置後観察が省略化された条件下でも移送中の状態は安定しており、引渡手続に支障はなかった。
引渡完了。

秋山直哉については現地補助適性及び作業理解力を選定理由とし、引受区分は現地支援として整理された。
移送時間圧縮の影響は観察記録に限定的な影響にとどまり、引渡時の照合確認において支障は生じなかった。

渡航先における当該3名の処遇については、各引受区分に対応した配置先への引継が完了扱いとして記録されている。
通常経路の確保困難に伴い処置後観察が省略化されたため、受渡後の追跡記録は通常行程より希薄である。

外的事情による経路変更及び手順圧縮は本行程における主要な制約条件であった。
連絡手段の複数化により管理系統の代替確保は図られたものの、処置後観察省略化は記録連続性の低下を招いており、後続照合において制約となり得る。

記録担当者としては、本行程が外的事情による例外運用条件下においても引渡完了水準を維持し得たことを確認する。
ただし、通常経路の回復及び処置後観察の再実施を将来行程における優先課題として付記する。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 16,
    pageIdRaw: "Phase4(16)",
    searchWords: ["出航記録","2017-08-08","2017年8月8日"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "37797",
    slug: "profile-kiryu",
    path: "/profile-kiryu-37797",
    title: "記録：桐生遼",
    body: `個体識別子：3-001
個体呼称：桐生遼(きりゅう りょう)
性別：男
生年月日：1993年 11月 4日
入信日：2014年 5月 21日

入信時20歳。
入信前から不規則な生活環境に慣れており、環境条件の変動に対して大きな動揺を示しにくい素地を有していた。
周囲との摩擦を避ける傾向があり、集団生活においても存在感が小さく管理上の注目を引きにくい個体として把握された。

第6教育寮課程修了者。
持久性が高く不規則環境下においても生活態度が比較的安定した個体として評価された。
環境条件の変動が大きい場面でも管理下の運用継続に支障を生じにくい対象とされた。

鎮静処置時の抵抗反応が軽微であり、移送中の管理負担も少ないと見込まれた。
持久性・不規則環境への順応性・鎮静処置時の低抵抗性が相互に補完し、移送過程における運用安定性が高いと評価された。

生活態度の安定と処置時の反応軽微性が継続して記録されており、労務補助区分への適合性ありと判断された。

鎮静処置時の低抵抗性は課程中に複数回確認されており、移送場面での管理負担軽減の観点から高く評価された。
存在感の薄さと環境順応性の高さが組み合わさることで、移送行程全体を通じた管理コストの低減に貢献する個体と整理された。

第3期渡航巡礼対象として選定され、出航記録2020-08-08に組み込まれた。

労務補助区分として受渡完了が記録されており、後続処理については現地側資料に委任されている。

移送場面での実用性が高く、管理上の問題もなく課程を完了した。
労務補助区分への選定根拠は記録上明確であり、処遇の方向性は妥当と評価される。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 17,
    pageIdRaw: "Phase4(17)",
    searchWords: ["桐生遼"],
    imagePrompts: [],
    images: ['/images/photo-kiryu-ryo.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "35614",
    slug: "profile-nagase",
    path: "/profile-nagase-35614",
    title: "記録：長瀬美琴",
    body: `個体識別子：3-002
個体呼称：長瀬美琴(ながせ みこと)
性別：女
生年月日：1995年 1月 30日
入信日：2015年 6月 12日

入信時20歳。
入信前から人当たりがよく、初対面の相手に対して自然な対人応答が可能であったとされる。
感情を表に出しにくい性格であったとの記録があり、外部からの刺激に対して大きな反応を示しにくい素地を入信前から有していた。

第6教育寮課程修了者。
対人応答性が高く、初見環境においても過度な抵抗を示しにくい個体として評価された。
環境変化への反応振幅が小さく配置条件の変動に対しても支障を生じにくい対象とされた。

継続観察において感情表出の平準化が進行し、指示への定着が早いとの所見が付された。
指示受容後の維持と対人場面における応答一貫性が高いと評価された。

対人応答性・初見環境への順応性・感情反応の平準化・指示定着の速さを総合して接遇補助区分への適合性ありと判断された。

課程中において感情反応の平準化が急速に進行し、観察担当者がその速度を特記している記録が残されている。
初見環境への低抵抗性は複数の模擬場面において確認されており、接遇補助区分の選定根拠として最も重視された所見である。

第3期渡航巡礼対象として選定され、出航記録2020-08-08に組み込まれた。

接遇補助区分として受渡完了が記録されており、後続処理については現地側資料に委任されている。

感情平準化の速度と初見環境への低抵抗性が際立っており、接遇補助区分への適合性は記録上最も根拠が明確な部類に属する。
安定した課程修了を経た標準事例として評価される。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 18,
    pageIdRaw: "Phase4(18)",
    searchWords: ["長瀬美琴"],
    imagePrompts: [],
    images: ['/images/photo-nagase-mikoto.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "43192",
    slug: "profile-akiyama",
    path: "/profile-akiyama-43192",
    title: "記録：秋山直哉",
    body: `個体識別子：3-003
個体呼称：秋山直哉(あきやま なおや)
性別：男
生年月日：1994年 9月 17日
入信日：2015年 1月 8日

入信時20歳。
入信前は単純作業の職歴を有しており、繰り返しの作業に対して抵抗感が少ない気質を有していたとされる。
入信時の評価では作業理解力と基礎体力が水準以上と判断されており、補助運用系の候補として早期に名簿へ収録されていた。

第6教育寮課程修了者。
現地補助に必要な基礎体力及び作業理解力を有する個体として評価された。
補助運用に適合する対象として早期に候補者群の中に整理されていた。

補助運用時の安定性が確認されており、再教育後の反応観察においても大きな逸脱は認められなかった。
命令受容性も維持されており、反復的作業環境での応答傾向が崩れにくい対象として評価された。

基礎体力・作業理解力・補助運用時の安定性・再教育後の反応安定・命令受容性の維持を総合して現地支援区分への適合性ありと判断された。

再教育後の反応が安定して維持された点は、介入の効果が持続する素地を有していることを示している。
作業理解力と体力が両立しており、現地支援の実務において幅広い作業への対応が期待される個体として整理された。

第3期渡航巡礼対象として選定され、出航記録2020-08-08に組み込まれた。

現地支援区分として受渡完了が記録されており、後続処理については現地側資料に委任されている。

入信前からの素地と課程での評価が一致しており、選定の根拠が明確な事例である。
再教育後の安定維持は処遇継続性の観点からも良好な記録として把握される。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 19,
    pageIdRaw: "Phase4(19)",
    searchWords: ["秋山直哉"],
    imagePrompts: [],
    images: ['/images/photo-akiyama-naoya.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "48386",
    slug: "2018-03-31",
    path: "/2018-03-31-48386",
    title: "出航記録 2018-03-31",
    body: `出航日程：2018年 3月 31日
出航先：フィリピン
出航人数：2 名

当該工程においては片桐悠真・三田村菜月の2名が第4期対象として渡航巡礼した記録である。

本行程は第4期渡航巡礼の第1回行程に係る記録であり、年度末の教育課程修了後処遇調整と並行して実施された。
移送行程は短時間化され、記録様式も簡略化されている。
片桐悠真及び三田村菜月の2名について、各引受区分との対応を前提として移送及び引渡が行われた。

片桐悠真については修了後処遇の整理対象として行程名簿へ組み込まれ、引受区分は搬送補助として整理された。
年度末処理との並行実施のため移送行程が短縮されたが、船内管理において特段の異常は記録されていない。
引渡時の照合確認は完了した。

三田村菜月については指示追従性及び対人配置適性を選定理由とし、引受区分は特別配置として整理された。
簡略化された記録様式の下での移送においても状態の安定が維持されており、引渡手続に支障はなかった。
引渡完了。

渡航先における当該2名の処遇については、各引受区分に対応した配置先への引継が完了として記録されている。
受渡後の追加報告はなく、追跡記録は簡略化された様式にとどまっている。

本行程は年度末実施及び修了処理との並行という条件下において、簡略化された行程構成により実施された。
2名規模での移送は管理負担の観点から適切な規模であったと判断される。
ただし記録様式の簡略化は後続照合の際の参照可能性を低下させるものであり、継続的な課題として認識されるべきである。

記録担当者としては、年度末並行処理において記録精度の維持が困難であったことを認める。
引継後追跡の充実については後続行程における改善事項として引き続き取り組むことが適当である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 20,
    pageIdRaw: "Phase4(20)",
    searchWords: ["出航記録","2018-03-31","2018年3月31日"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "92368",
    slug: "profile-katagiri",
    path: "/profile-katagiri-92368",
    title: "記録：片桐悠真",
    body: `個体識別子：4-001
個体呼称：片桐悠真(かたぎり ゆうま)
性別：男
生年月日：1996年 5月 6日
入信日：2016年 10月 14日

入信時20歳。
入信前より優柔不断で他者の意見に依存する傾向が強かったとされ、自己決定の場面では反応が鈍いとの記録がある。
信仰活動への参加は周囲に倣う形で行われたとされており、自発性よりも環境への順応として把握されていた。

第6教育寮課程修了者。
修了後の処遇整理対象として早期に名簿へ組み込まれており、修了時点で既に後続処遇との接続が予定されていた記録として把握された。

自己判断力は乏しい一方で応答の均質化が進行しており、外部刺激への反応幅が抑制されて指示への応答形式が一定化していた。
管理下での運用が容易とされ、個別調整を要しない対象と評価された。

応答の均質化と管理下での運用容易性を総合して搬送補助区分への適合性ありと判断された。

自己判断力の乏しさが課程において一貫して観察されており、介入なく応答均質化が進行した。
この点は管理者側の負担軽減に大きく貢献した要素として記録されており、処遇整理への早期組み込みを正当化した主要根拠として機能している。

第4期渡航巡礼対象として選定され、出航記録2021-03-31に組み込まれた。

搬送補助区分として受渡完了が記録されており、後続処理については現地側資料に委任されている。

管理上の負担が最小限であり、応答の定型化が完全に定着した状態で課程を終えた典型事例である。
搬送補助区分への選定は記録上の根拠と一致しており、処遇判断として適切と評価される。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 21,
    pageIdRaw: "Phase4(21)",
    searchWords: ["片桐悠真"],
    imagePrompts: [],
    images: ['/images/photo-katagiri-yuma.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "17457",
    slug: "profile-mitamura",
    path: "/profile-mitamura-17457",
    title: "記録：三田村菜月",
    body: `個体識別子：4-002
個体呼称：三田村菜月(みたむら なつき)
性別：女
生年月日：1997年 7月 19日
入信日：2017年 2月 26日

入信時19歳。
入信前から素直で指示に従う傾向が強く、対人配置においても摩擦を生じにくい気質を有していたとされる。
入信動機に関する記録は簡略であるが、組織活動に早期から定着した点が初期評価に記載されている。

第6教育寮課程修了者。
指示追従性が高く対人配置下においても態度の変動が少ない個体として評価された。
管理下における応答安定性と配置時の取扱容易性の両面から運用適合性が高いとされた。

面談後に感情起伏の減少が確認された。
個別対応の負担が軽い旨が明記されており、管理者側の介入頻度を抑制し得る対象として評価された。

指示追従性・対人配置下の態度安定・感情起伏の減少・管理負担の軽さを総合して特別配置区分への適合性ありと判断された。

面談後の感情起伏減少が短期間で進行した点が観察担当者の所見に繰り返し言及されており、介入に対する素応答性の高さとして評価されている。
課程全体を通じて個別調整の記録が最小限にとどまった個体であり、特別配置区分への選定根拠は充実している。

第4期渡航巡礼対象として選定され、出航記録2021-03-31に組み込まれた。

特別配置区分として受渡完了が記録されており、後続処理については現地側資料に委任されている。

課程全体にわたって安定した評価が維持されており、特別配置区分への選定の正当性は記録上明確である。
管理負担の最小性と感情起伏の抑制という二点が特に優れた事例として記録に残る。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 22,
    pageIdRaw: "Phase4(22)",
    searchWords: ["三田村菜月"],
    imagePrompts: [],
    images: ['/images/photo-mitamura-natsuki.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "89202",
    slug: "2020-01-29",
    path: "/2020-01-29-89202",
    title: "出航記録 2020-01-29",
    body: `出航日程：2020年 1月 29日
出航先：イスラエル（テルアビブ）
出航人数：3 名（予定）→中止

当該工程においては神谷柊斗・戸塚亮介・真田美月の3名が第5期対象として渡航巡礼予定であったものの、当該回は実施中止とされた記録である。

本行程は第5期渡航巡礼の第1回行程として組成されたものである。
出航先はイスラエル（テルアビブ）であり、前期までのフィリピンから渡航先が変更された初回行程でもある。
処置前評価は3名全員について完了していたが、現地受入態勢・連絡系統・輸送経路のいずれにも不確定要素が残存したため、実施直前において行程全体の中止判断が下された。
3名は予定者名簿から削除されるのではなく保留名簿へ移され、次回選定時の再評価対象として継続管理されることとなった。
なお、現地担当者連絡先として「+97255123456」が記録末尾に付されており、再調整時の接続先として保持される。

神谷柊斗については、体力面及び反復作業適応を評価軸として予定者名簿へ登載されたが、最終評価が未確定のまま中止判断に至った。
選定理由は身体的耐性の高さであり、受入先用途との適合性が判断の基礎とされている。
航海日誌上の記録は処置前評価の完了をもって終結しており、渡航実績は生じていない。
引継は実施されていない。
戸塚亮介については、指示受容性及び管理下での安定性が選定理由として記録されている。
中止決定時点において処置前評価は完了していたが、最終評価の確定前に保留移行となった。
真田美月については、対人応答性及び処置後安定性の評価が高位であったとされ、予定者群のうち優先度の高い個体として整理されていたことが確認される。

中止後の3名の処遇については、保留名簿への移行により個別終結は行われていない。
その後、神谷柊斗・戸塚亮介・真田美月のいずれも中止後の区画移動先にて死亡確認に至ったことが別記録において報告されている。
詳細経緯を記した文書は現存せず、死亡確認に至る過程の追跡は不可能な状態にある。

行程中止に伴い本件は未実施事案として処理されており、受渡先への引継は行われていない。
中止理由は対象者側の適格性欠如ではなく、受入側条件の不安定性であると整理されている。
保留期間中に生じた3名の死亡確認は、管理手順の不備を示す重大な欠落として記録の参照価値を有する。

個体管理上の付記として、神谷柊斗は最終評価未確定のまま名簿登載されたという手順上の例外が認められる。
処置記録の未完結状態が維持されたまま中止判断に至ったことと、その後の死亡確認との連続は、記録系統の重大な欠落として今後の手順見直しにおける参照対象とする必要がある。
また、連絡先情報「+97255123456」は再調整時の接続先として原記載どおり保存するものとし、削除又は要約を行ってはならない。

行程付記として、本件は出航先をフィリピンからイスラエル（テルアビブ）へ変更した初回行程の中止事案であり、受入先変更に伴う条件整備の不十分さが中止の背景にあったものと推定される。
次回予定は本記録上確定しておらず、現地担当者からの再通知を待って再開判断を行う構成となっていた。

記録担当者としては、評価未完結のまま名簿登載を行った点、及び保留期間中の所在管理が機能しなかった点を重大な手順上の問題として付記する。
本記録は単純な中止記録としてではなく、未完結管理が死亡確認に至った経緯を示す不完全終結記録として保存されるべきものである。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 23,
    pageIdRaw: "Phase4(23)",
    searchWords: ["出航記録","2021-06-07","2021年6月7日"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "56001",
    slug: "profile-kamiya",
    path: "/profile-kamiya-56001",
    title: "記録：神谷柊斗",
    body: `個体識別子：4-003
個体呼称：神谷柊斗(かみや しゅうと)
性別：男
生年月日：1998年 6月 23日
入信日：2018年 8月 17日

入信時20歳。
入信前から体力・反復作業への耐性が高い環境に置かれていたとされる。
入信の経緯に関する詳細は乏しいが、入信後の活動参加は概ね順調であったとの初期記録が残っている。

第6教育寮課程修了者。
体力面及び反復作業への適応が見込まれる個体として評価され、出航予定者名簿に記載された。
容姿上は男性に分類されるが、そのこと自体は予定者整理を妨げる事情とはされていない。

処置記録は継続観察中の段階にあり、指示受容・応答傾向・管理下での安定性に関する最終評価は確定していなかった。
観察継続を前提とした予定者記録として保持されていたものと解される。

体力面と反復作業適応を評価軸に予定者名簿へ登載されたが、最終評価が未確定のまま渡航実施の中止が決定された。

最終評価が確定しないまま名簿へ登載された点は管理上の手順として例外的な措置であり、処置記録の未完結状態が維持されたまま中止判断に至ったことは後続の事態に影響した可能性がある。
経過の詳細が失われているため検証の手段を欠く。

第4期渡航巡礼予定者として名簿登録されたが、実施中止後の区画移動先にて死亡確認に至った。

詳細経緯を記した別記は現存せず、死亡確認に至る経過の追跡が不可能な不完全終了記録として扱われている。
以後の処遇記録は移管扱いとなっている。

評価未確定のまま名簿登載された経緯と、中止後の死亡確認の連続は記録上の重大な欠落を示している。
本事案は管理手順の不備の証左として今後の手順見直しにおける参照対象とする必要がある。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 24,
    pageIdRaw: "Phase4(24)",
    searchWords: ["神谷柊斗"],
    imagePrompts: [],
    images: ['/images/photo-kamiya-shuto.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "55340",
    slug: "profile-totsuka",
    path: "/profile-totsuka-55340",
    title: "記録：戸塚亮介",
    body: `個体識別子：4-004
個体呼称：戸塚亮介(とつか りょうすけ)
性別：男
生年月日：1999年 2月 14日
入信日：2019年 4月 5日

入信時20歳。
入信前から従順な性格であったとされ、権威ある立場の者の指示に抵抗なく従う傾向が強かったと初期記録に記載されている。
入信の経緯に関しては記録が断片的であるが、集団生活への定着は早く問題行動の記録は見当たらない。

第6教育寮課程修了者。
従順性及び管理下における安定性が評価され、仮登録済み対象として整理された。
運用基準への適合性が比較的高い個体として扱われていた。

再教育後の応答はおおむね安定しており、指示受容・対人応答・処置後の変動幅について大きな逸脱が認められなかった。
継続的管理に支障のない対象として保留系統へ接続された。

従順性・管理下での安定性・再教育後の応答安定について肯定的評価が継続したが、渡航実施は中止となり保留系統へ移行した。

保留期間中の管理記録は簡略化されており、個別の観察所見の継続性が維持されていなかったことが保留系統の記録から読み取れる。
保留状態の管理密度の低さが後の経過に影響した可能性は否定できないが、記録の欠損により確認手段を欠く。

第4期渡航巡礼予定者として名簿登録されたが、実施中止後の保留期間中に死亡確認に至った。

記録上残されているのは死亡確認の事実のみであり、原因欄及び補遺記録には欠損が認められる。
死亡に至る経過を連続して追跡できない不完全終了記録として扱われている。

保留期間中の管理密度の問題と最終的な死亡確認は、保留系統の運用基準の妥当性を再検討させる事案である。
記録欠損の範囲が広く、後続の監査において参照困難な状態にある。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 25,
    pageIdRaw: "Phase4(25)",
    searchWords: ["戸塚亮介"],
    imagePrompts: [],
    images: ['/images/photo-totsuka-ryosuke.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "12480",
    slug: "profile-sanada",
    path: "/profile-sanada-12480",
    title: "記録：真田美月",
    body: `個体識別子：4-005
個体呼称：真田美月(さなだ みづき)
性別：女
生年月日：1998年 10月 31日
入信日：2018年 11月 20日

入信時20歳。
入信前から人付き合いが得意であったとされ、対人配置においても自然な応答が可能な素質を有していたと初期評価に記載されている。
入信の経緯については記録が乏しいが、組織内活動に早期から定着したことが確認されている。

第6教育寮課程修了者。
対人配置適性ありとの評価により予定者群へ編入され、観察記録上も指示定着良好・処置後安定との所見が継続して付されていた。
通常運用に十分適合する個体として扱われた。

出航中止後は次回選定候補として保留扱いに移され、再分類を待つ状態として継続管理された。
指示定着・対人応答・処置後安定の各評価が維持されていた間は候補者として残置されていた。

指示定着良好・処置後安定・対人配置適性が評価されていたが、渡航実施中止により選定系統への再接続待ちとして保留系統へ移行した。

保留期間における管理記録は通常台帳への記載が間欠的であり、個別観察の継続性が十分に維持されなかったことが補遺記録から読み取れる。
再分類待ちの状態が長期化する中で管理上の注目度が低下していたことが死亡確認後の記録削除の速さにも反映されている。

第4期渡航巡礼予定者として名簿登録されたが、出航中止後の再分類期間中に死亡確認に至った。

死亡確認後、通常台帳から早期削除され関連記録は補遺側へ分離された。
通常記録系統での連続性が断たれており、補遺記録においてのみ参照される対象へ移行した事案として扱われている。

良好な評価記録を持ちながら保留系統への移行後に死亡確認に至った点は、保留管理の問題として記録されるべき事案である。
台帳削除の速さは記録保存方針の観点から再検討を要する事項として指摘しておく。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 26,
    pageIdRaw: "Phase4(26)",
    searchWords: ["真田美月"],
    imagePrompts: [],
    images: ['/images/photo-sanada-mizuki.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "38195",
    slug: "2021-06-07",
    path: "/2021-06-07-38195",
    title: "出航記録 2021-06-07",
    body: `出航日程：2021年 6月 7日
出航先：イスラエル（テルアビブ）
出航人数：3 名

当該工程においては長谷川美咲・栗原里奈・結城春香の3名が第5期対象として渡航巡礼した記録である。

本行程は第5期渡航巡礼の第1回行程に係る記録であり、出航先はイスラエル（テルアビブ）である。
前回行程（2020-01-29）が現地受入条件の不備により中止となったことを受け、条件整備が完了した上で改めて実施された。
3名全員について処置前評価及び最終評価が完了しており、事前選定段階から優先対象として整理されていたことが確認される。
行程は標準的な工程構成のもとで実施され、3名全員について現地側への引渡完了が記録されている。
受渡後の追加報告はない。
なお、本記録末尾には次回の渡航巡礼日程として2024年9月18日が付記されている。

長谷川美咲については、年齢条件及び対人応答性が選定理由として記録されている。
処置後安定性の評価が高位であり、優先対象として整理されていた。
航海日誌上は出航から引渡完了に至るまで異常なしと記録されている。
引継は現地担当者へ完了した。
栗原里奈については、外見印象及び処置後安定性が選定評価の主軸とされている。
行程中の応答傾向は安定しており、指示受容性に問題は認められなかった。
引継完了。
結城春香については、対人応答性及び処置後安定性が高位評価とされており、3名のうち最優先度の個体として整理されていたことが確認される。
引継完了。

渡航先における3名の処遇については、現地側への引渡完了が記録されており、受渡区分の詳細は現地担当者側の記録に委ねられている。
本記録上は引渡完了の一事実のみが記載されており、受渡後の状況及び処遇詳細についての追加報告はない。

行程全般について特筆すべき異常事象は記録されていない。
前回中止行程の教訓を踏まえ、受入側条件・連絡系統・輸送経路の三要素について事前確認が実施されたものとみられる。
なお、本行程の完了後に次回日程（2021年9月18日）が確定されており、本件は単発事案ではなく連続行程の一部として位置付けられる。

記録担当者としては、本行程が前回中止事案の後継として適切な条件整備のもとで実施され、完了に至ったことを確認する。
次回行程（2021年9月18日）への接続において本記録が参照基礎となることを付記する。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 27,
    pageIdRaw: "Phase4(27)",
    searchWords: ["イスラエル"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "77578",
    slug: "2021-09-18",
    path: "/2021-09-18-77578",
    title: "出航記録 2021-09-18",
    body: `出航日程：2021年 9月 18日
出航先：イスラエル（テルアビブ）
出航人数：5 名（引渡完了3名、死亡確認1名、処遇未確定1名）

当該工程においては相沢大輔・大貫悠太・白井真由・遠野紗季・相沢晴人の5名が第6期対象として渡航巡礼した記録である。

本行程は第6期渡航巡礼の第1回行程に係る記録であり、出航先はイスラエル（テルアビブ）である。
前回行程（2021-06-07）の完了を受けた後続行程として実施された。
5名のうち相沢大輔・大貫悠太・白井真由・遠野紗季の4名は第6期渡航巡礼対象として整理されているが、相沢晴人については正規の渡航巡礼対象者名簿上の位置付けが不明確であり、区分外個体として例外的に組み込まれた扱いとなっている。
搬送途中に遠野紗季が重度発作を発症し、現地到着後に死亡確認に至った。
相沢大輔・大貫悠太・白井真由の3名については現地側への引渡完了が記録されている。
相沢晴人については反抗性の強さ及び記録系統上の不備から正規の受渡完了対象として整理されておらず、処遇未確定のまま別記録へ分岐した。

相沢大輔については、対人応答性及び管理下での安定性が選定理由として記録されており、引渡完了。
大貫悠太については指示受容性の高さが選定理由とされており、引渡完了。
白井真由については処置後安定性が高位評価とされており、引渡完了。
なお、白井真由及び遠野紗季は教育寮内における接触頻度が高く、後期段階においては分離管理対象として取り扱われていたことが別紙記録上確認されているが、本件では両個体が同一行程内で搬送されており、管理上の先行判断が移送実務に反映されていなかった。
遠野紗季については別記録において別系統管理下の記録が付されており、搬送途中に重度発作が発生し現地到着後に死亡確認された。
受渡未了として死亡確認事案に分岐。
相沢晴人については移送開始時点から反抗性が強く、指示受容・行動統制・移送手順への順応に難があり、正規受渡完了対象として整理されることなく処遇未確定のまま別記録参照へ分岐した。

渡航先における処遇については、相沢大輔・大貫悠太・白井真由の3名について現地側への引渡完了が記録されている。
遠野紗季については受渡未了として死亡確認事案に処理されている。
相沢晴人については現地到着後の処遇が確定しておらず、別記録に委ねられている。

行程付記として、遠野紗季の死亡発生により本件行程に係る記録系統は一部混乱を生じ、受渡完了報告と事故補遺が同一文書内に混在する状態となっている。
また、相沢晴人は正式な渡航巡礼対象者名簿及び第6教育寮在籍記録の何れにも明確には現れておらず、関連事案における所在照会及び接触経路の照合上の参照個体として別記録に付されている。
白井真由・遠野紗季の分離管理判断が移送実務に反映されなかった点は、後続行程への改善事項として記録する。

記録担当者としては、行程中の死亡発生及び処遇未確定個体の発生という二重の不完全終結事由が同一行程内に生じたことを重大な事案として付記する。
本記録は通常の完了記録としてではなく、事故補遺及び関連照合記録を併載した不完全終結記録として取り扱うことが適当である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 28,
    pageIdRaw: "Phase4(28)",
    searchWords: ["2021年9月18日","2021-09-18"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "78003",
    slug: "profile-aizawa-d",
    path: "/profile-aizawa-d-78003",
    title: "記録：相沢晴人",
    body: `個体識別子：【区分外】
個体呼称：相沢晴人(あいざわ はると)
性別：男
生年月日：1996年 12月 3日
入信日：（記録なし・非在籍）

正式な渡航巡礼対象者ではなく、第6教育寮における在籍記録も確認されていない区分外個体。
正規の選定課程・処置履歴・所属整理の何れにも属しておらず、通常運用の記録系統外部から流入した例外事例として扱われた。
本個体に関する来歴・背景については把握されている情報が極めて限定的である。

白井真由の所在確認を目的として施設区画へ侵入し、遠野紗季との接触を経て管理上の要注意事案として扱われるに至った。
指示定着・投薬管理・反応安定性に関する確認が不十分であり、通常対象と同列の管理判断を行う前提を欠くと整理された。

教育系統および処置系統の何れにも属していないため、外形上の応答のみをもって安定性を認定できないとの注記が付された。
通常の在籍台帳への直接接続は相当でないと判断された。

侵入及び接触の時点から一貫して反抗的態度を維持しており、指示受容性は著しく低いと評価されていた。
区分外個体としての取扱いが適用されたが、管理運用の各段階において通常の手順が機能しなかったことが記録に示されている。

第6期渡航巡礼行程（出航記録2024-09-18）に例外的に組み込まれたことが確認されているが、正規の渡航巡礼対象者名簿上の位置付けは不明確である。

最終的な処遇は移送元において確定されておらず、現地判断委任として独立記録へ移管された。
処遇未確定の例外記録として継続管理されるべき扱いとなっている。

本個体は通常の管理手順が全面的に機能しなかった事例として位置付けられる。
反抗性の強さと記録系統上の不備が重なり、処遇の最終確定が不可能な状態に至っている。
区分外個体の取扱い手順の限界を示す事例として記録に残す。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 29,
    pageIdRaw: "Phase4(29)",
    searchWords: ["相沢晴人"],
    imagePrompts: [],
    images: ['/images/photo-aizawa-haruto.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "14904",
    slug: "profile-onuki",
    path: "/profile-onuki-14904",
    title: "区分外個体について",
    body: `区分外個体とは、当会における正規の選定課程、教育寮課程、処置記録又は所属整理の何れにも正式には属していないにもかかわらず、何らかの事情により内部の管理、収容、移送又は引渡系統へ編入された個体を指す内部分類である。
本分類は、既存の分類基準に適合しない個体を暫定的に記録上把握するために用いる補助区分であり、通常の対象区分と同列に解してはならない。
当該個体は、選定、観察、処置、再教育及び配置判断等の通常手続を経ないまま記録系統へ流入しているため、当会の運用上、例外処理を要する不安定要素として扱うものとする。

通常の対象者は所定の確認段階を順次経た後に記録化され、管理可能性が担保された状態で内部運用へ組み込まれる。
これに対し、区分外個体は当該前提を欠いたまま発見及び拘束される場合が多く、確認不備を残した状態で管理系統へ接続される。
このため、本分類は単なる未登録者又は一時保留者を意味するものではなく、既存の分類表に直ちに収容できない個体を示す識別である。

区分外個体が流入する契機としては、施設区画への侵入、外部由来者の一時拘束、記録不備のままの混入、事故的接触及び移送時の照合漏れその他これらに準ずる事由がある。
個体の存在確認が記録上の整理に先行し初期段階において基礎情報の欠損が生じやすいため、対象者区画周辺で発見された個体又は処置済対象との接触歴を有する個体については、外部者と断定する根拠が乏しい限り区分外個体としての処理を優先する。

区分外個体の多くは基礎情報、処置履歴及び管理判断に必要な各種条件の全部又は一部を欠いている。
当会の運用上、重視されるのは服従の外形ではなく反応の予測可能性であり、口数の少なさ、抵抗の弱さ及び即時応答その他の表面的所見は安定性の根拠とはならない。
外形上の従順性をもって管理適格性ありと判断してはならず、評価語を付す場合も「反応未確定」「指示受容の由来不明」等の保留表現を優先するものとする。
本分類が付された個体は正規対象者と同列の手順により処理してはならず、発見後速やかに拘束、隔離、再分類又は移管の対象とする。

拘束及び隔離は懲戒を目的とするものではなく、既存管理系統への影響拡大を防止するための初期安全措置である。
正規対象者との接触歴が確認される場合には指示系統の攪乱及び処置済対象の反応変調その他二次的影響を生じ得るため、接触時間の長短を問わず区画分離を優先する。
区分外個体に対する供述は直ちに事実認定の根拠として採用してはならず、発言内容と行動所見を分離記録し、不明事項を推定により補完しないことを原則とする。

処遇判断は長期観察を前提とせず速やかな整理対象として取り扱い、整理には再分類審査、外部系統への返送及び記録上の終結処理を含む。
なお、本分類は整理前の暫定分類として運用するが、基礎情報の欠損が解消されないまま長期間留め置かれた場合、本分類が実質的な収容形態へ転化するおそれがある。
区分外指定を安易な先延ばしの理由として用いてはならず、同時に再分類のための形式的通過名として扱ってもならない。

以上のとおり、区分外個体とは単なる所属不明者又は記録漏れ対象ではなく、管理可能性及び予測可能性の基盤を欠く対象である。
よって、本分類が付された個体については、通常対象に準じた手順を安易に適用せず、拘束、隔離、独立記録及び移管を優先することが当会の運用上適当な初期対応である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 30,
    pageIdRaw: "Phase4(30)",
    searchWords: ["区分外個体"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "67748",
    slug: "record-defense",
    path: "/record-defense-67748",
    title: "対象：篠宮依乃に対する処置",
    body: `個体:篠宮依乃(しのみや いの)(以後、当該個体)は、当会が秘匿条項として管理する対象及びその周辺事項に対し、継続的又は反復的な詮索行為を行っていたことが確認されたため、通常の照会対象としてではなく、管理上の例外事案として記録するものとする。
当会において秘匿条項は、対象そのもののみならず、その周辺人物、接触経路、記録断片、付随情報その他これに準ずる関連事項を含めて秘匿管理の対象とする。
このため、当該領域に対する自発的接近、反復的照会、追跡的確認又は執拗な探索が認められる場合には、当該行為者の所属、経路、意図及び外部接続の有無が未確認であっても、運用上の警戒事由として扱うことができる。

当該個体は、現時点において当会の正規の選定課程、教育寮課程、処置記録又は所属整理の何れにも属することが確認されておらず、本来の運用基準上は一般人に該当する。
もっとも、一般人であることは、直ちに非対象性を保障するものではない。
秘匿条項に属する対象又はその周辺事項に対する継続的又は反復的な詮索、接触、追跡その他これに準ずる関与が確認された場合には、例外的に管理上の審査対象として扱うことができる。
当該個体については、まさにこの例外に該当するため、通常の部外者として整理するのではなく、例外管理対象として記録することが適当である。

また、当該個体は既存の確認系統を経ないまま記録上浮上しているため、当会の通常運用に照らせば、区分外個体として取り扱うことが相当である。
区分外個体として扱う理由は、単に記録が不足しているためではない。
当該個体については、基礎情報、接触経路、観察履歴、応答傾向、管理可能性その他当会が通常の運用において前提とする諸条件の全部又は一部が未確認であり、既存の分類基準に直ちに適合させることができないためである。
したがって、当該個体は既存対象と同列に扱うのではなく、区分外個体として独立記録し、既存台帳及び通常記録束から切り離して管理するものとする。

特に、秘匿条項に係る詮索行為は、単独の情報収集行為としてのみ評価すべきではない。
それは、既存対象との接触、記録経路への干渉、周辺情報の収集、又は未確認系統からの流入兆候として把握されるべきものであり、初期段階において軽視してはならない。
当該個体が正規の選定系統、教育系統又は既存の処置系統に属さないまま秘匿対象へ接近している以上、通常の照会、警告又は任意的整理のみで終結し得る事案として扱うことは相当でない。

当該個体に関する初期判断は、長期的な留置又は段階的導入を前提とせず、短時間のうちに整理方針を定めるものとする。
これは、当該個体が一般人でありながら例外的に管理対象とされている以上、その内部留保自体が継続的な不安定要因となり得るためである。
また、秘匿条項への接近が偶発的関心ではなく、対象又は周辺情報への到達を目的とした継続行為である場合、当該個体を通常の保留対象として長期間滞留させることは、記録汚染、接触拡大、周辺対象への影響その他二次的混乱を誘発するおそれがある。
よって、当該個体については、区分外個体として記録した上で、速やかに再分類の可否、移管の要否、又は記録上の終結可能性を判断することが適当である。

なお、当該個体に対する供述、説明又は申告については、当該内容を直ちに事実認定の基礎として採用してはならない。
発言内容は発言内容として、行動所見は行動所見として、それぞれ分離して記録し、確認済事項と未確認事項を混在させないものとする。
特に初期記録においては、不明事項を推定により補完せず、不明であること自体をそのまま保持することを原則とする。
当該個体が一般人であること、又は一般人であるように見えることは、管理上の危険性評価を軽減する理由にはならない。

以上のとおり、当該個体は、本来は対象外とされる一般人に該当するが、秘匿条項及びその周辺事項に対する継続的詮索が確認されたことにより、例外的に審査及び整理の対象とすることができる。
かつ、当該個体は既存の選定、教育及び処置の何れの系統にも属していないため、現時点では区分外個体として記録するほかない。
よって、本件は、通常の部外者対応としてではなく、例外的な区分外個体事案として整理し、既存対象と分離した記録管理の下で処理方針を決定すべき事案である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "ブログのコメント欄に「出航記録 2021-09-18」のリンクを投稿を契機に、HP、資料室のリンクをすべてリダイレクトする。",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 31,
    pageIdRaw: "Phase4(31)",
    searchWords: [],
    imagePrompts: [],
    isSearchVisible: false,
    isPhaseBadgeVisible: true,
  },
  {
    id: "81171",
    slug: "404",
    path: "/404-81171",
    title: "ブログ-404",
    body: `このページは見つかりませんでした。

お探しのコンテンツは存在しないか、削除された可能性があります。

404 Not Found`,
    pageType: "ブログ",
    siteType: "blog",
    overview: "ブログのヘッダ、フッタなどの体裁を整えながら「404 not found」ページとする",
    phaseLabel: "Phase-End",
    phaseOrder: 99,
    phaseIndex: 1,
    pageIdRaw: "Phase-End",
    searchWords: [],
    imagePrompts: [],
    isSearchVisible: false,
    isPhaseBadgeVisible: true,
  },
];

export const pages: ArgPage[] = expandPageSources(pageSources);
