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
    searchWords: ["施設","施設について","第1教育寮","第１教育寮","教育寮"],
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
    searchWords: ["施設","施設について","第2教育寮","第２教育寮","教育寮"],
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
    searchWords: ["第3教育寮","第３教育寮"],
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
    searchWords: ["第4教育寮", "第４教育寮"],
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
    searchWords: ["第5教育寮", "第５教育寮"],
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
    body: `当会では、年間を通じてさまざまな集まりや行事を開催しております。どなたでもお気軽にご参加ください。

## 春季感謝集会（4月）

新年度の始まりにあたり、日々の学びと支えへの感謝を分かち合う集まりです。

## 初等導きの会（5月・10月）

子どもたちを対象とした学びの場です。読み聞かせや交流の時間を設けております。

## 継承講話会（6月・12月）

各年代の参加者が集い、学びの継承について語り合う場です。

## 夏期修養会（8月）

合宿形式で行われる集中的な学びの時間です。場所・詳細は別紙にてご案内します。

## 奉仕者静修日（11月）

奉仕者・担当者向けの振り返りと意見交換の場です。一般参加はご相談ください。

各行事の詳細・日程については「年間予定」をご覧いただくか、担当窓口までお問い合わせください。

## 会報・お知らせ

活動報告や行事案内は「会報一覧」にてご確認いただけます。
`,
    pageType: "HP",
    siteType: "main",
    overview: "メニュー「定例行事のご案内」の親ページ。各行事への入口。",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 2,
    pageIdRaw: "Phase1(2b)",
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
    body: `当会の会報は、活動の記録と会員の皆様へのご案内を目的として、年に数回発行しております。

最新号・近年の会報については担当者にお問い合わせください。

バックナンバー

旧年度会報2017年春号
旧年度会報2016年夏号
旧年度会報2016年春号

※それ以前の号については、一部内容の確認中のため掲載を保留しております。詳細は担当窓口までお問い合わせください。
`,
    pageType: "HP",
    siteType: "main",
    overview: "公開されている会報の一覧ページ。",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 21,
    pageIdRaw: "Phase1(21)",
    searchWords: ["会報一覧","旧年度会報2016年春号"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "56069",
    slug: "schedule",
    path: "/schedule-56069",
    title: "年間予定",
    body: `当年度の主な行事予定をご案内します。

4月　春季感謝集会
5月　初等導きの会（第1回）
6月　継承講話会（第1回）
8月　夏期修養会（場所・詳細は別紙参照）
9月　保護者説明会
10月　初等導きの会（第2回）
11月　奉仕者静修日
12月　継承講話会（第2回）・年次懇親会

※詳細は保護者説明会にて順次ご案内いたします。日程変更が生じた場合は担当者よりご連絡します。
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
    body: `2017.09.01　保護者説明会のご案内（9月開催）
2017.06.15　継承講話会（第1回）開催報告
2017.04.03　春季感謝集会 開催報告
2017.03.20　会報更新のお知らせ（旧年度会報 2017年春号）
2016.12.10　年次懇親会 開催報告
2016.09.05　保護者説明会のご案内
2016.08.22　夏期修養会 開催報告
2016.07.01　会報更新のお知らせ（旧年度会報 2016年夏号）
2016.04.01　春季感謝集会のご案内
2016.03.15　会報更新のお知らせ（旧年度会報 2016年春号）
――
※2016年以前のお知らせは一部表示できません。
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
    slug: "2016",
    path: "/2016-21480",
    title: "旧年度会報 2016年春号",
    body: `2016年 春号（第47号）　平成28年4月1日発行

新年度のご挨拶

春の訪れとともに、皆様におかれましては益々ご清祥のこととお慶び申し上げます。昨年度も多くの方々のご協力のもと、様々な活動を無事に終えることができました。誠にありがとうございました。本年度も引き続き、地域の皆様との絆を大切に、学びの場を広げてまいりたいと存じます。

地域奉仕活動報告

昨秋より継続してきた近隣公園の清掃活動が、先月をもって一区切りとなりました。延べ参加者数は84名にのぼり、地域の方々からも温かいお声をいただいております。

児童課程　春の集い

3月下旬、児童課程の年間締めくくりとなる「春の集い」が開催されました。参加した子どもたちは今年度の学びを振り返りながら、それぞれの言葉で感想を述べました。当日は保護者の方々もご参加くださり、終始温かな雰囲気のもとで進行しました。

施設案内

第1教育寮・第2教育寮については通常どおり利用受付中です。第3教育寮については担当者にお問い合わせください。

次号（2016年夏号）では夏期修養会の模様をご報告する予定です。

編集：広報委員会　／　無断転載禁止
`,
    pageType: "HP",
    siteType: "main",
    overview: "過年度会報の1つ。",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 24,
    pageIdRaw: "Phase1(24)",
    searchWords: ["旧年度会報2016年春号","第3教育寮","第３教育寮","旧年度会報"],
    imagePrompts: [],
    images: ['/images/newsletter-2016-spring.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "04288",
    slug: "2016",
    path: "/2016-04288",
    title: "旧年度会報 2016年夏号",
    body: `2016年 夏号（第47号）　平成28年8月1日発行

夏期修養会 開催報告

今年度の夏期修養会は、8月中旬に予定どおり実施されました。参加者一同、日常を離れた環境のなかで学びを深め、充実した時間を過ごすことができました。詳細な活動記録については担当者にお問い合わせください。

児童課程　夏の活動より

夏期を通じて、児童課程では体験型の学習活動を継続しました。子どもたちの様子は概ね落ち着いており、課程担当者による個別の記録は別途まとめております。

※集合写真の一部は、諸般の事情により掲載を見合わせております。

施設のご案内

各教育寮とも通常運営中です。見学・相談は各担当窓口までご連絡ください。

次号（2017年春号）では、新年度に向けた導きと適性確認の取り組みについてご報告する予定です。

脚注：児童課程の生活記録は別記にて管理しています。

編集：広報委員会　／　無断転載禁止
`,
    pageType: "HP",
    siteType: "main",
    overview: "過年度会報の1つ。",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 25,
    pageIdRaw: "Phase1(25)",
    searchWords: ["旧年度会報2016年夏号","児童課程","旧年度会報"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "49925",
    slug: "2017",
    path: "/2017-49925",
    title: "旧年度会報 2017年春号",
    body: `2017年 春号（第48号）　平成29年4月1日発行

新年度のご挨拶

春の訪れとともに、皆様におかれましては益々ご清祥のこととお慶び申し上げます。本年度も会員の皆様とともに、学びと歩みを積み重ねてまいりたいと存じます。

児童課程より

昨年度に引き続き、児童課程では日常生活の落ち着きと姿勢の習慣化を重点目標として参りました。継続参加者の多くに安定した生活リズムの定着が見られます。引き続き、保護者の皆様のご協力をお願い申し上げます。

なお、本年度より適性確認の手続きを一部変更いたします。詳細については担当者よりご案内いたします。

施設のご案内

各教育寮の区画整理については、管理体制の移行に伴い順次更新を行っております。最新の施設状況については第3教育寮公開記録をご参照ください。

（内部注）区画再整理に係る対応については別途通知のとおり。担当者間での共有を徹底すること。

編集：広報委員会　／　無断転載禁止
`,
    pageType: "HP",
    siteType: "main",
    overview: "過年度会報の1つ。",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 26,
    pageIdRaw: "Phase1(26)",
    searchWords: ["旧年度会報2017年春号","適性確認","旧年度会報"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "72269",
    slug: "3",
    path: "/3-72269",
    title: "第3教育寮 公開記録",
    body: `本ページは、第3教育寮に関する公開情報を掲載するものです。

■ 施設概要
所在地：非公開　　定員：12名　　対象：課程修了者（内部選定）　　管理責任者：記載省略

■ 活動記録（参加区分：第3教育寮児童課程）
当区画では、日常生活を通じた継続的な観察・記録を中心とした支援を実施しています。参加者は年間を通じて規則正しい生活習慣を維持し、定期的な面談・記録提出を行います。外部との連絡は窓口を通じて行われます。

年次報告については、施設内部の整備記録とあわせて別途管理されています。一般公開分の抄録は印刷配布のみとし、本ページへの掲載は省略します。

■ 写真記録（一部）
写真：施設外観（2013年）　／　写真：居室内（記録用）　／　集合写真（2013年度）
※一部の画像ファイルはサーバー移行の際に破損したため表示できません。

関連ページ：施設使用案内　／　第3教育寮 生活案内
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
    body: `当会では、各教育寮の概要と利用方法について以下にご案内いたします。見学・入寮に関するご相談は、各担当窓口までお問い合わせください。

■ 第1教育寮
小学生から中学生を対象とした基礎課程の拠点です。年間を通じて学び会・集団活動を実施しており、保護者の方による見学も随時受け付けております。定員：8名。

■ 第2教育寮
中学生以上を対象とした継続課程の拠点です。規則正しい生活リズムと共同生活を通じて、継続的な学びを深めます。見学については事前予約をお願いしております。定員：10名。

■ 第3教育寮
課程修了者を対象とした区画です。一般見学不可。詳細については「第3教育寮 生活案内」をご参照ください。

※ 本ページは旧版です。最新の施設案内については各担当者へお問い合わせください。
`,
    pageType: "HP",
    siteType: "main",
    overview: "古い施設利用案内ページ。",
    phaseLabel: "Phase1",
    phaseOrder: 1,
    phaseIndex: 28,
    pageIdRaw: "Phase1(28)",
    searchWords: ["施設使用案内","見学不可"],
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
    body: `第3教育寮は、当会の課程修了者のうち一定の評価基準を満たした方を対象とした生活支援区画です。通常の教育寮とは異なり、個別の指導環境を整えた区画となっております。

■ 生活について
日課は管理部が定めた時間割に沿って行われます。外出・外泊は原則として許可制となっており、個別の申請が必要です。また、区画内への外部の方の立ち入りはお断りしております。見学ご希望の場合も、事前の個別相談が必要となります。

■ お問い合わせ
入寮に関するご相談は担当者が個別にご案内いたします。電話での一般受付は行っておりません。資料をご希望の方は窓口まで直接お申し付けください。

【更新のお知らせ（平成26年2月）】
平成25年11月の用途変更に伴い、施設概要・区画構成に関する詳細情報は「教育寮整備報告」（管理番号：FR-2013-001）に移しました。以下に抄録を掲載します。

教育寮整備報告（抄録）　管理番号：FR-2013-001　平成25年度

本報告は、教育寮群の用途整理および管理体制の移行について記録するものです。第3教育寮については、関連対応のための区画整備として、従来の課程運営から用途を変更しました（平成25年11月1日付）。第4・第5教育寮については施設整備上の理由により廃止処理を実施しております（平成25年9月15日付）。

詳細は施設管理委員会の窓口までお問い合わせください。

関連ページ：施設使用案内（旧）
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
    body: `管理番号：FR-2013-001　　内部資料

平成25年度　教育寮整備報告

第3教育寮：生活支援区画としての運用を改め、指導・観察を主とする区画へ用途変更を実施した。生活記録・面談記録・日課記録の一部を別綴管理へ移行し、通常台帳から除外した。

第4・第5教育寮：現行運用との整合性を欠く旧記録を整理処理した。[R:3:対象記録の一部は抹消処理を実施した。]

外部公開分は「第3教育寮年次報告2013」に要約する。

■：管理部限定閲覧。本文書の複製・持出は禁止。
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
    path: "/3-2014-02728",
    title: "第3教育寮 年次報告 2014",
    body: `管理番号：DR3-2014　　内部資料

平成26年度　第3教育寮　年次報告

【児童課程】
日課への追従・応答の安定・夜間帯における[R:3:行動固定化]の各項目について確認を実施した。評価はおおむね良好であり、観察継続とした。

【夜間区画】
日中との連続記録として整理。詳細は[R:3:夜間観察記録]を参照。

【個別指導】
応答に揺れのある対象については[R:3:個別指導補遺]へ移管した。

翌年度報告は「第3教育寮年次報告2015」を参照のこと。

■：管理部限定閲覧。
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
    path: "/3-2015-79224",
    title: "第3教育寮 年次報告 2015",
    body: `管理番号：DR3-2015　　内部資料

平成27年度　第3教育寮　年次報告

【適性評価】
応答の揺れの少なさ・管理負担を中心指標として対象を整理した。区分：安定・継続観察・[R:3:別区画]。

【別区画】
安定評価が確認されなかった対象については[R:3:別区画への移行手続き]を実施した。

【写真記録】
前年度より減少。詳細な個別記録は[R:3:別綴へ移管済み]。

前年度報告は「第3教育寮年次報告2014」を参照のこと。

■：管理部限定閲覧。
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
    slug: "3-2013",
    path: "/3-2013-06334",
    title: "第3教育寮 年次報告 2013",
    body: `管理番号：DR3-2013　　内部資料

平成25年度　第3教育寮　年次報告

【観察・指導】
観察継続・生活時間の固定・個別指導後の再測定を実施した。
■■■■■■■■■■■■■■■■■■■■（閲覧対象外）

【児童課程】
詳細は[R:3:第3教育寮指導日誌抜粋]および児童課程記録抜粋を参照のこと。

■：管理部限定閲覧。
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
    body: `児童課程記録　抜粋　（年少課程日課）

対象：■■■■
日課：■■■■■■　応答状態：安定
姿勢：やや崩れ → 再指示後改善
発話：指示外■件　定型応答：■件
就寝前観察：[R:3:夜間帯へ入る直前の状態を測定し、夜間観察記録へ接続するための前段観察]

対象：■■■■
日課：■■■■■■　応答状態：不安定
再指示：■回　安定到達時間：■分
視線：逸脱■回　拒否反応：あり（持続■分）

「第3教育寮指導日誌抜粋」との照合を前提とする。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase2",
    phaseOrder: 2,
    phaseIndex: 5,
    pageIdRaw: "Phase2(5)",
    searchWords: ["児童課程記録抜粋"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "75800",
    slug: "3",
    path: "/3-75800",
    title: "第3教育寮 指導日誌 抜粋",
    body: `第3教育寮　指導日誌　抜粋

■月■日
10:20　応答遅延確認。再指示2回。[R:3:安定後別室]へ移動。
11:40　視線固定。姿勢崩れ。担当者対応。再指示後改善。
14:30　■■■■■■■■■■■■■■■■■■■■
16:10　指示への追従良好。応答安定。
20:50　就寝前観察へ接続。→ 夜間観察記録1へ

■月■日
■■■■■■■■■■　応答遅延なし。
■■■■■■■■■■■■■■■■■■■■■

「第3教育寮面談記録抜粋」との照合を前提とする。
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
    body: `第3教育寮　面談記録　抜粋

対象：■■■■　面談日：■■年■月■日
発話状況：返答遅延あり（約■秒）　定型応答率：■割
拒否反応：■回（持続■分）
[R:3:導きへの理解度]：■■■　評価：要継続

対象：■■■■　面談日：■■年■月■日
発話状況：良好　定型応答率：■割
拒否反応：なし　評価：安定

「夜間観察記録1」（発語・離床・泣き声・安定時間）との突き合わせを前提とする。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase2",
    phaseOrder: 2,
    phaseIndex: 7,
    pageIdRaw: "Phase2(7)",
    searchWords: ["第3教育寮面談記録抜粋"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "36895",
    slug: "1",
    path: "/1-36895",
    title: "夜間観察記録 1",
    body: `夜間観察記録　第1期

対象：■■■■

22:10　就寝確認
22:40　離床1回 → 再就寝誘導
23:15　発語あり（内容■■■■）　継続観察
00:30　安定確認。睡眠導入後安定時間：■分
■:■■　■■■■■■■■■■■■■■■■

観察継続。後段は「[R:3:夜間観察記録2]」へ接続。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase2",
    phaseOrder: 2,
    phaseIndex: 8,
    pageIdRaw: "Phase2(8)",
    searchWords: ["夜間観察記録1", "夜間観察記録１", "夜間観察記録"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "93054",
    slug: "2",
    path: "/2-93054",
    title: "夜間観察記録 2",
    body: `夜間観察記録　第2期（続き）

処置後：■■■■■■■■■■■■■■■■
再導後：安定確認。応答反応：■■■■■■

03:40　■■■■■■■■■■■■■■■■
05:20　■■■■■■■■■■■■■■■■

翌朝評価：[R:3:感情起伏抑制]　評価：■■■

集約報告提出先：[R:3:応答安定報告]
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase2",
    phaseOrder: 2,
    phaseIndex: 9,
    pageIdRaw: "Phase2(9)",
    searchWords: ["夜間観察記録2", "夜間観察記録２", "夜間観察記録"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "93053",
    slug: "response-report",
    path: "/response-report-93053",
    title: "応答安定報告",
    body: `管理番号：RS3-■■■　　内部資料

第3教育寮　応答安定報告

観察期間：■■年■月〜■■年■月

発話均一化：■■■　（前期比：変化あり）
指示反応速度：■■■　（評価：改善）
感情起伏抑制：■■■　（評価：安定）

特記事項：
第3教育寮事故報告（[R:3:長谷川亘]）について別記参照。
関連画像は「写真記録欠損」として別綴管理。

■：管理部限定閲覧。
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
    body: `写真記録　第3教育寮児童課程

※ このページの画像の一部はサーバー移行の際に破損したため表示できません。

No.1　第3教育寮　外観（■■年■月撮影）　→ 読み込みエラー
No.2　居室内　記録用写真　→ 読み込みエラー
No.3　夜間観察後　記録写真　→ 読み込みエラー
No.4　集合写真（■■年度）　→ 読み込みエラー

関連：生活指導補遺・姿勢習慣化を参照のこと。
（最終確認：2015年8月　[R:3:対象記録整理と同時期に欠損処理が実施されている]）
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
    body: `管理番号：RC3-■■■　　内部資料

第3教育寮　区画変更記録

■■年■月■日　対象■■■■：安定確認 → 別区画移行
■■年■月■日　対象■■■■：継続観察 → 区画保留
■■年■月■日　対象■■■■：[R:3:対象外保留] → 別枠管理
■■年■月■日　対象■■■■■■■■■■■■■■

備考：
安定後別区画―管理側が求める応答形式を維持できる状態を確認した対象に適用。
対象外保留―通常の区画変更線上に位置付けられない対象の別枠管理。

関連：奉仕者向け第3教育寮補助要項・個別指導補遺を参照のこと。

■：管理部限定閲覧。
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
    searchWords: ["奉仕者向け第3教育寮補助要項"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "77516",
    slug: "a",
    path: "/a-77516",
    title: "個別指導補遺 A",
    body: `個別指導補遺 A　　内部資料

氏名：■■■■　観察日：■■年■月■日
発話：■件（指示外■件）　視線逸脱：■回
拒否反応：■回（持続■分）　安定到達時間：■分

氏名：■■■■　観察日：■■年■月■日
発話：■件（指示外■件）　拒否反応：なし
安定状態：良好

氏名：■■■■（黒塗り）
測定結果：■■■■■■■■■■■■■■

後続：[R:3:個別指導補遺 B] へ接続。
[R:3:処置後の測定値は別枠管理。]
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
    body: `個別指導補遺 B　　内部資料

再指示後：■■■■■■■■■■■■■■■
処置継続：■■■■■■■■■■■■■■■
別綴へ移管：■■■■■■■■■■■■■■

写真記録：別枠管理（通常欄には記載しない）

欄外注記：[R:3:内部での継続処理と外向け説明との落差]については旧保護者説明資料を参照のこと。

■：管理部限定閲覧。
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
    body: `管理番号：INC3-2015-001　　内部資料

第3教育寮　事故報告（長谷川亘）

発生日：[R:3:2014年01月29日]
対象：長谷川亘

経過概要：
■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
[R:4:施設内での処置後、外部機関への連絡は行われなかった。]

記録移管：通常台帳から切り離し、別記録へ移管した。
後日死亡確認済み。[R:4:死因の外部記録なし。]

関連：「お知らせ：長谷川亘について」（外部向け告知）

■：管理部限定閲覧。本文書の複製・持出は禁止。
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
    body: `第3教育寮　補遺別綴　　内部資料（閲覧制限あり）

写真記録は別綴へ移管。
児童課程補遺：閲覧不可（管理部限定）

■■■■■■■■■■■■■■■■■■■■
人名欄：■■■■■　写真欄：■■■■■
識別番号欄：■■■　補遺参照欄：■■■

後続資料：
・応答統制記録
・発話量制御
・初等課程再編案
[R:3:長谷川亘に関連する記録を含む。外部公開分との照合は事後のみ実施。]
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase2",
    phaseOrder: 2,
    phaseIndex: 20,
    pageIdRaw: "Phase2(20)",
    searchWords: ["第3教育寮補遺別綴","児童課程補遺", "補遺別綴"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "85045",
    slug: "response-control",
    path: "/response-control-85045",
    title: "応答統制記録",
    body: `管理番号：RC-2014-■■■　　内部資料

応答統制記録

観察項目：返答遅延 / 再指示頻度 / 視線逸脱 / 発話量変動 / 無応答時間 / 感情表出付随有無

対象：■■■■
返答遅延：■秒　再指示：■回　視線逸脱：■回
発話量変動：■■　無応答時間：■秒　感情表出：あり

対象：■■■■
返答遅延：なし　再指示：なし
発話量変動：安定　感情表出：なし

評価：応答内容の差異は[R:3:許容すべき個性ではなく、減少させるべき揺れ]として処理する。

接続：初等課程再編案へ引き継ぐ。
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
    body: `管理番号：CP-2015-001　　内部資料

初等課程再編案

本案は、従前は個別に運用していた「導き」「生活指導」「観察」「応答調整」を一体的課程として編成し直すための再編案である。

再編後の課程構成：
　一、導き課程：■■■■■■■■■■■■■■■■■
　二、生活指導：応答の均質化維持を補助手段として位置付ける。
　三、観察：反応の揺れを早期に抽出し応答調整へ直結させる。
　四、応答調整：遅延の縮小・拒否反応の抑制・指示追従の定着を管理する。

[R:3:矯正手順を初等課程へ組み込む]ための制度化文書として運用する。

関連：反応矯正教育 実施記録を参照のこと。

■：管理部限定閲覧。
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
    body: `管理番号：CI-2015-■■■　　内部資料

反応矯正教育　実施記録

対象：■■■■　実施回：第■回
観察：■■■■■■　姿勢：■■■　情動反応：■■■
再指示：■回　処置後：■■■■　再評価：■■■

対象：■■■■　実施回：第■回
■■■■■■■■■■■■■■■■■■■■

実施手順は[R:3:反応矯正教育施要領]による。
詳細は添付資料を参照のこと。

■：管理部限定閲覧。
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
    body: `管理番号：CR6-2012-001　　内部資料　閲覧制限あり


第1条（定義）
反応矯正教育とは、児童課程対象者に対し、応答・発話・姿勢・情動反応を一定の範囲へ収束させることを目的として実施される内部課程である。

第2条（適用対象）
応答の不安定、発話の変動、情動反応の振幅が管理上の問題として確認された対象に重点的に適用する。適用の判断は担当者が行い、記録に残す。

第3条（観察項目）
観察は視線、返答速度、発話量、感情変動その他の外形的反応指標を対象とする。好ましい変化とは、自発発話の減少、定型応答の増加、拒否反応の縮小および情動起伏の平板化をいう。

第4条（接続資料）
観察結果は反応観察表・発話制御観察・情動整序報告・指示定着評価表へ段階的に引き継ぎ、応答均質化記録に集約する。具体的な実施手順は反応矯正教育施要領による。

■：管理部限定閲覧。本文書の複製・持出は禁止。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 1,
    pageIdRaw: "Phase3(1)",
    searchWords: ["反応矯正教育とは","反応矯正教育"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "99545",
    slug: "control-manual",
    path: "/control-manual-99545",
    title: "反応矯正教育 施要領",
    body: `管理番号：CR6-2013-001　　内部資料　閲覧制限あり


反応矯正教育は第6教育寮対象者に対して段階的に実施される課程であり、各工程は所定の順序で適用される。担当者の評価に基づき次段階へ接続する。

一、反応矯正課程
対象の反応様式を所定の範囲に収束させることを目的とする。観察→再指示→別室移動→処置後観察→再評価の手順で実施し、結果を反応観察表A・Bに記録する。逸脱反応は所定の再指示工程を経た上で再評価に付す。

二、情動整序課程
拒否・抵抗・感情起伏の減少を目標とする継続観察課程。感情振幅の平準化が確認された状態を「安定」として記録し、次課程へ接続する。拒否および抵抗の表出は「未整序の情動残存」として処理する。

三、応答均質化課程
指示に対する応答形式を一定の範囲に収束させる。発話量・反応速度・定型応答の定着度を記録し、場面による差異の縮小を中心評価項目とする。個別性の残存は不安定要素として記録する。

四、発話制御課程
自発発話の減少および定型応答の増加を確認する観察課程。指示外の発話が抑制されていることを確認し、指示定着評価表に結果を引き渡す。

各課程の記録は修了時に修了者処遇基準へ引き継ぐ。

■：管理部限定閲覧。本文書の複製・持出は禁止。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 2,
    pageIdRaw: "Phase3(2)",
    searchWords: ["反応矯正教育施要領","反応観察表","応答均質化記録","平板化","情動整序報告","発話制御観察"],
    imagePrompts: [],
    pdfs: ['/pdf/control-overview.pdf'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "38965",
    slug: "6",
    path: "/6-38965",
    title: "第6教育寮 概要",
    body: `管理番号：OV6-2014-001　　内部資料

第6教育寮は、応答安定化・指示定着の工程を経た対象を受け入れ、後続処遇への接続を前提として保持・管理する後期区画である。
対象の選定基準、日常運用および管理手順は第6教育寮生活要領（管理番号：LR6-2014-003）に定める。
修了後の処遇区分については第6教育寮修了者処遇基準（管理番号：PR6-2015-001）による。

■：管理部限定閲覧。本文書の複製・持出は禁止。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 3,
    pageIdRaw: "Phase3(3)",
    searchWords: ["第6教育寮概要","第6教育寮生活要領", "第６教育寮概要","第６教育寮生活要領", "第6教育寮","第６教育寮"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "60582",
    slug: "6",
    path: "/6-60582",
    title: "第6教育寮 生活要領",
    body: `管理番号：LR6-2014-003　　内部資料　閲覧制限あり


第1条（目的）
本要領は、第6教育寮における日常生活の運用基準、行動規範および担当者による管理手順を定めることを目的とする。

第2条（生活基本事項）
入寮者は以下の基本事項を遵守するものとする。
　（一）起床・就寝・食事の時刻は担当者の指示に従う。
　（二）居室外への移動は担当者への申告を要する。
　（三）他の入寮者との私的な会話・交流は[R:4:原則として担当者の立会いのもとでのみ許可される。]
　（四）外部との連絡は[R:4:担当者の確認を経た上でのみ行うことができる。]

第3条（応答・態度）
入寮者は担当者からの指示に対し、速やかかつ安定した応答を維持するよう努めるものとする。
感情の表出は必要最小限にとどめ、他者への影響を生じさせないよう配慮すること。

第4条（奉仕活動）
入寮者は課程の一環として、担当者が指定する奉仕活動に参加するものとする。
奉仕活動の内容・日程・対象については担当者が定め、入寮者はこれに従う。
奉仕活動の実績は修了判定における評価項目の一つとして記録される。

第5条（修了後の接続）
本要領に基づく生活実績および観察記録は、修了時に第6教育寮修了者処遇基準（管理番号：PR6-2015-001）へ引き継ぐものとする。
処遇区分の判定は同基準の定めるところによる。

■：管理部限定閲覧。本文書の複製・持出は禁止。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 4,
    pageIdRaw: "Phase3(4)",
    searchWords: ["第6教育寮生活要領", "第６教育寮生活要領"],
    imagePrompts: [],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "40764",
    slug: "6",
    path: "/6-40764",
    title: "第6教育寮 修了者処遇基準",
    body: `管理番号：PR6-2015-001　　内部資料　閲覧制限あり


第1条（目的）
本基準は、第6教育寮課程の修了認定を受けた者に対する処遇の区分および後続措置の選定手順を定めることを目的とする。

第2条（適用対象）
本基準の適用対象は、担当責任者により修了と認定された者とする。課程途中での離脱者・保留者は別途定める規程による。

第3条（処遇区分）
修了者は以下の区分に従い整理する。
　区分Ａ：[R:4:通常修了。地域活動への継続参加を前提とした一般管理へ移行する。]
　区分Ｂ：[R:4:要継続観察。補遺系統へ移管し再評価を実施する。]
　区分Ｃ：外地奉仕選定対象。別記対象照合表との照合を経た上で後続手続きへ移行する。
　区分Ｄ：[R:4:処遇保留。安定性未収束として別記管理へ移行する。]

第4条（判定基準）
区分の判定は、以下の項目を総合して担当責任者が行う。
　（一）観察期間中の応答安定性および指示定着の程度
　（二）[R:4:別名義管理の有無および照合状況]
　（三）対人反応の傾向および管理負担の評価
　（四）[R:4:外部接触による変動リスクの程度]
　（五）長時間管理下における態度の一貫性

第5条（別記対象の取扱い）
[R:4:区分Ｃまたは区分Ｄに該当する者については、別記対象照合表との照合完了をもって後続手続きの起点とする。照合未了の場合は処遇保留として継続管理する。]

第6条（記録の管理）
本基準に基づく判定結果は第6教育寮修了者一覧（管理番号：DM6-LIST-2017）と連結して管理する。
判定結果の保管期間は10年とし、期間経過後の取扱いは[R:4:管理部の裁量による廃棄または移管]による。

■：管理部限定閲覧。本文書の複製・持出は禁止。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 5,
    pageIdRaw: "Phase3(5)",
    searchWords: ["第6教育寮修了者処遇基準", "第６教育寮修了者処遇基準"],
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

頁末注記には、例外対象については別記対象取扱規程による旨の参照が残されており、通常記載に収まる者と規程上別記へ回される者とを分ける前段階の管理頁として理解すべきである。
よって、本頁は修了者全体を示す名簿であると同時に、その一部が通常とは異なる枠組みで後続処理へ接続されていたことを示す入口資料として扱うことが適当である。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 6,
    pageIdRaw: "Phase3(6)",
    searchWords: ["第6教育寮修了者一覧", "第６教育寮修了者一覧"],
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
本規程の適用対象は主として第6教育寮対象者のうち別記整理を要すると判断された者とする。当該対象は通常の修了者と同列に整理してはならず、別記対象として抽出し、独立した記録系統において管理するものとする。氏名、在籍経路その他通常の識別事項は本体記録上において秘匿し、記録線上の接続は別記番号又は照合記号によって代替する。

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
    phaseIndex: 7,
    pageIdRaw: "Phase3(7)",
    searchWords: ["別記対象取扱規程"],
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

観察評価：応答均質化・感情起伏の減少・対人印象の維持
複数観察時点における評価はいずれも同傾向を示した。

対人場面における返答の揺れが縮小し、表情変化・語調・視線反応を含む反応振幅が抑制された状態へ収束。
感情起伏の表出は大幅に減少し、継続的な管理環境下での運用に適合する状態と判定された。

逸脱事案：記録なし

第6教育寮修了者一覧（管理番号：DM6-LIST-2017）に登録済み。
[R:4:奉仕者選定記録]との照合対象として処理。
引渡可否の最終判定は後続照合資料による。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 8,
    pageIdRaw: "Phase3(8)",
    searchWords: ["第6教育寮対象A","第6教育寮対象", "第６教育寮対象","第6教育寮対象者", "第６教育寮対象者"],
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

記録移管先：外地奉仕補遺系統。以降の処理は通常台帳管理外となる。

当該記録は教育寮内観察として完結せず、補遺系統分岐記録として別途管理される扱いとなった。

匿名処理の範囲が広く個別評価を行う情報を欠く。
ただし補遺系統への移管という経路は、当該個体が後続処理における追跡対象として位置付けられていたことを示すものと理解できる。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 9,
    pageIdRaw: "Phase3(9)",
    searchWords: ["第6教育寮対象B","第6教育寮対象", "第６教育寮対象","第6教育寮対象者", "第６教育寮対象者"],
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

「[R:4:別名義管理]継続」「[R:4:照合]は後段階」との記載が明確に残されており、人格矯正及び名前の書換えが並行して進められていた可能性が示唆されている。
同一個体を異なる名義単位で継続処理していた形跡があり、通常台帳から切り離した上で別名義として再整理されていた可能性が高い。

照合作業は本記録の時点で未了とされた。
別名義管理の経緯については補遺記録を参照のこと。本記録段階での確定整理なし。

記録の断片性が著しく、課程中の具体的な観察内容を確認できる部分が限られる。
名義管理の変更を伴う対象として取り扱われていた点が唯一明確に読み取れる事項である。

別記対象照合表を参照のこと。本記録は照合未了段階の中間資料。

照合処理の最終的な集約は後続資料へ先送りとされており、本記録単独では処理完結しない構成となっている。

本記録は情報量が著しく乏しく、記録者として評価し得る根拠を欠く。
別名義処理が並行していたという事実のみが後続照合において参照価値を有するものと考えられる。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 10,
    pageIdRaw: "Phase3(10)",
    searchWords: ["第6教育寮対象C","第6教育寮対象", "第６教育寮対象","第6教育寮対象者", "第６教育寮対象者"],
    imagePrompts: [],
    images: ['/images/photo-6-c.png'],
    isSearchVisible: true,
    isPhaseBadgeVisible: true,
  },
  {
    id: "24578",
    slug: "notation-guide",
    path: "/notation-guide-24578",
    title: "別記対象照合表",
    body: `本表は、通常台帳に記載されない別記対象について、名義差異、別名義管理の有無及び照合状況を確認するために作成された内部照合資料である。
記載対象の大半は黒塗り処理が施されているが、一部判読が可能である。

判読可能な範囲では、複数の対象について通常記録上の名義と別記側における名義とが一致しておらず、独立した名義として再整理したことを前提とする形式となっている。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 11,
    pageIdRaw: "Phase3(11)",
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
応答の安定性は課程を通じて高水準に保たれており、別記録上、神田愛（かんだ あい）の名義との照合情報が付されている。

課程中に目立った問題行動の記録はなく、個別介入の頻度も標準以下に抑制された。
対人印象の一貫性が高く、管理運用上の負担が小さい個体として位置付けられていた。

[R:4:渡航巡礼]対象として選定され、[R:4:出航記録2019-01-28]に組み込まれた。

現地側への引渡が完了したものと記録されており、受渡後の詳細経過については後続資料に委任されている。

応答安定性及び対人印象の維持水準はともに高く、処置後の経過も良好であった。
[R:4:渡航巡礼]対象としての適合性は高位にあると評価される。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 12,
    pageIdRaw: "Phase3(12)",
    searchWords: ["第6教育寮課程修了者", "第６教育寮課程修了者","長谷川美咲","神田愛"],
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

[R:4:渡航巡礼]対象として選定され、[R:4:出航記録2019-01-28]に組み込まれた。

現地側への引渡が完了したものと記録されており、受渡後の詳細経過については後続資料に委任されている。

指示追従性が高く処置後の経過も安定していた。
当初から温順な気質を有していた個体であり、課程適応の観点からは典型的な修了事例と評価される。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 13,
    pageIdRaw: "Phase3(13)",
    searchWords: ["第6教育寮課程修了者", "第６教育寮課程修了者", "栗原里奈"],
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

[R:4:渡航巡礼]対象として選定され、[R:4:出航記録2019-01-28]に組み込まれた。

現地側への引渡が完了したものと記録されており、受渡後の詳細経過については後続資料に委任されている。

年齢に対して反応安定性が際立って高く、処置後の経過においても顕著な乱れが認められなかった。
今後の同種事案における参照基準として有用な記録を残した個体と評価される。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 14,
    pageIdRaw: "Phase3(14)",
    searchWords: ["第6教育寮課程修了者", "第６教育寮課程修了者", "結城春香"],
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

[R:4:渡航巡礼]対象として選定され、[R:4:出航記録2019-04-05]に組み込まれた。

現地側への引渡が完了したものと記録されており、受渡後の詳細経過については後続資料に委任されている。

体力面での適性は高く、継続的な指示環境下における運用実績も良好であった。
単独判断能力の低下は管理側にとって安定要素として機能しており、選定判断の妥当性は高いと評価される。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 15,
    pageIdRaw: "Phase3(15)",
    searchWords: ["第6教育寮課程修了者", "第６教育寮課程修了者","相沢大輔"],
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

[R:4:渡航巡礼]対象として選定され、[R:4:出航記録2019-04-05]に組み込まれた。

現地側への引渡が完了したものと記録されており、受渡後の詳細経過については後続資料に委任されている。

作業理解力と環境順応性が相補的に機能しており、補助業務系の配置において高い実用性を示すと予想される。
課程修了後の処遇適合性は標準以上と評価される。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 16,
    pageIdRaw: "Phase3(16)",
    searchWords: ["第6教育寮課程修了者", "第６教育寮課程修了者","大貫悠太"],
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

[R:4:渡航巡礼]対象として選定され、[R:4:出航記録2019-04-05]に組み込まれた。

現地側への引渡が完了したものと記録されており、受渡後の詳細経過については後続資料に委任されている。

対人応答性と外見印象の水準が一貫して高く、処置後の回復力も良好であった。
接触関係による変動リスクを除けば、処遇適合性において優良な記録を持つ個体と評価される。
`,
    pageType: "資料室",
    siteType: "archive",
    overview: "検索ワードによる",
    phaseLabel: "Phase3",
    phaseOrder: 3,
    phaseIndex: 17,
    pageIdRaw: "Phase3(17)",
    searchWords: ["第6教育寮課程修了者", "第６教育寮課程修了者","白井真由"],
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

渡航巡礼対象として選定され、[R:4:出航記録2019-04-05]に組み込まれた。

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
    phaseIndex: 18,
    pageIdRaw: "Phase3(18)",
    searchWords: ["遠野紗季"],
    imagePrompts: [],
    images: ['/images/profile-tono-record.png', '/images/photo-toono-saki.png'],
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

第1回の海外奉仕研修は2013年1月29日に実施されました。
その後も、受入環境及び運営体制を確認しながら、継続的な実施を予定しています。
`,
    pageType: "HP",
    siteType: "main",
    overview: "検索ワードによる",
    phaseLabel: "Phase4",
    phaseOrder: 4,
    phaseIndex: 2,
    pageIdRaw: "Phase4(2)",
    searchWords: ["渡航巡礼", "2013年1月29日", "2013-01-29"],
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

本行程記録末尾には、次回行程として2013年10月20日が付記されており、本件は連続案件の一部として位置付けられる。
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

第1期渡航巡礼対象として2013年1月29日付行程に組み込まれた。

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

本行程は第1期事案（長谷川亘の死亡確認）を受けて手順を再整理した上で実施された第2期渡航巡礼の第1回行程に係る記録である。
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

第2期渡航巡礼対象として選定され、出航記録2013-10-20に組み込まれた。

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

第2期渡航巡礼対象として選定され、出航記録2013-10-20に組み込まれた。

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

第2期渡航巡礼対象として選定され、出航記録2013-10-20に組み込まれた。

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

第2期渡航巡礼対象として選定され、出航記録2014-02-13に組み込まれた。

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

第2期渡航巡礼対象として選定され、出航記録2014-02-13に組み込まれた。

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

第2期渡航巡礼対象として選定され、出航記録2014-12-05に組み込まれた。

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

第2期渡航巡礼対象として選定され、出航記録2014-12-05に組み込まれた。

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

第2期渡航巡礼対象として選定され、出航記録2014-12-05に組み込まれた。

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

第3期渡航巡礼対象として選定され、出航記録2017-08-08に組み込まれた。

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

第3期渡航巡礼対象として選定され、出航記録2017-08-08に組み込まれた。

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

第3期渡航巡礼対象として選定され、出航記録2017-08-08に組み込まれた。

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

第4期渡航巡礼対象として選定され、出航記録2018-03-31に組み込まれた。

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

第4期渡航巡礼対象として選定され、出航記録2018-03-31に組み込まれた。

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
    slug: "2018-10-20",
    path: "/2018-10-20-89202",
    title: "出航記録 2018-10-20",
    body: `出航日程：2018年 10月 20日
出航先：■■■■■■
出航人数：3 名（予定）→中止

当該工程においては神谷柊斗・戸塚亮介・真田美月の3名が第5期対象として渡航巡礼予定であったものの、当該回は実施中止とされた記録である。

本行程は第5期渡航巡礼の第1回行程として組成されたものである。
出航先は■■■■■■であり、前期までのフィリピンから渡航先が変更された初回行程でもある。
処置前評価は3名全員について完了していたが、現地受入態勢・連絡系統・輸送経路のいずれにも不確定要素が残存したため、実施直前において行程全体の中止判断が下された。
3名は予定者名簿から削除されるのではなく保留名簿へ移され、次回選定時の再評価対象として継続管理されることとなった。
現地担当者連絡先：+97255123456（再調整時接続先）

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

行程付記として、本件は出航先をフィリピンから■■■■■■へ変更した初回行程の中止事案であり、受入先変更に伴う条件整備の不十分さが中止の背景にあったものと推定される。
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
    searchWords: ["出航記録","2018-10-20","2018年10月20日"],
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
入信日：2018年 9月 1日

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
    slug: "2019-01-28",
    path: "/2019-01-28-38195",
    title: "出航記録 2019-01-28",
    body: `出航日程：2019年 1月 28日
出航先：イスラエル
出航人数：3 名

当該工程においては長谷川美咲・栗原里奈・結城春香の3名が第5期対象として渡航巡礼した記録である。

本行程は第5期渡航巡礼の第1回行程に係る記録であり、出航先はイスラエルである。
前回行程（2018-10-20）が現地受入条件の不備により中止となったことを受け、条件整備が完了した上で改めて実施された。
3名全員について処置前評価及び最終評価が完了しており、事前選定段階から優先対象として整理されていたことが確認される。
行程は標準的な工程構成のもとで実施され、3名全員について現地側への引渡完了が記録されている。
受渡後の追加報告はない。
なお、本記録末尾には次回の渡航巡礼日程として2019年4月5日が付記されている。

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
なお、本行程の完了後に次回日程（2019年4月5日）が確定されており、本件は単発事案ではなく連続行程の一部として位置付けられる。

記録担当者としては、本行程が前回中止事案の後継として適切な条件整備のもとで実施され、完了に至ったことを確認する。
次回行程（2019年4月5日）への接続において本記録が参照基礎となることを付記する。
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
    slug: "2019-04-05",
    path: "/2019-04-05-77578",
    title: "出航記録 2019-04-05",
    body: `出航日程：2019年 4月 5日
出航先：イスラエル
出航人数：5 名（引渡完了3名、死亡確認1名、処遇未確定1名）

当該工程においては相沢大輔・大貫悠太・白井真由・遠野紗季・相沢晴人の5名が第6期対象として渡航巡礼した記録である。

本行程は第6期渡航巡礼の第1回行程に係る記録であり、出航先はイスラエルである。
前回行程（2019-01-28）の完了を受けた後続行程として実施された。
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
    searchWords: ["2019年4月5日","2019-04-05"],
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

第6期渡航巡礼行程（出航記録2019-04-05）に例外的に組み込まれたことが確認されているが、正規の渡航巡礼対象者名簿上の位置付けは不明確である。

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
    overview: "ブログのコメント欄に「出航記録 2019-04-05」のリンクを投稿を契機に、HP、資料室のリンクをすべてリダイレクトする。",
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
