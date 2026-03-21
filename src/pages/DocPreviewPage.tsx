import { useParams } from 'react-router-dom';

/* ─────────────────── shared helpers ─────────────────── */
const redact = (w: number = 80) => (
  <span style={{ display: 'inline-block', background: '#111', width: w, height: '1em', verticalAlign: 'middle', margin: '0 2px' }} />
);

/* ─────────────────── 1. newsletter-2016-spring ─────────── */
function NewsletterSpring2016(): JSX.Element {
  return (
    <div style={{ background: '#fffef8', fontFamily: '"Hiragino Mincho ProN", serif', color: '#1a1a1a', maxWidth: 760 }}>
      {/* header */}
      <div style={{ borderBottom: '3px double #5a7a3a', padding: '12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <div style={{ fontSize: 9, color: '#666', letterSpacing: 2 }}>共に学び、共に歩む</div>
          <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: 4 }}>当会会報</div>
        </div>
        <div style={{ textAlign: 'right', fontSize: 11, color: '#444' }}>
          <div>2016年 春号（第47号）</div>
          <div>平成28年4月1日発行</div>
        </div>
      </div>

      {/* two-column body */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px 32px', padding: '20px' }}>

        {/* col1 article 1 */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, borderBottom: '1px solid #5a7a3a', marginBottom: 8, paddingBottom: 4 }}>新年度のご挨拶</div>
          <p style={{ fontSize: 11, lineHeight: 1.9, margin: 0 }}>
            春の訪れとともに、皆様におかれましては益々ご清祥のこととお慶び申し上げます。昨年度も多くの方々のご協力のもと、様々な活動を無事に終えることができました。誠にありがとうございました。
          </p>
          <p style={{ fontSize: 11, lineHeight: 1.9, marginTop: 8 }}>
            本年度も引き続き、地域の皆様との絆を大切に、学びの場を広げてまいりたいと存じます。どうぞよろしくお願い申し上げます。
          </p>
          <div style={{ textAlign: 'right', fontSize: 10, marginTop: 6, color: '#555' }}>会長　高津 誠一</div>
        </div>

        {/* col2 article 2 */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, borderBottom: '1px solid #5a7a3a', marginBottom: 8, paddingBottom: 4 }}>地域奉仕活動報告</div>
          <p style={{ fontSize: 11, lineHeight: 1.9, margin: 0 }}>
            昨秋より継続してきた近隣公園の清掃活動が、先月をもって一区切りとなりました。延べ参加者数は84名、回収したゴミの量は——
          </p>
          {/* small photo */}
          <div style={{ margin: '10px 0' }}>
            <img src="/images/doc-cleaning.png" alt="清掃活動の様子" style={{ width: '100%', height: 80, objectFit: 'cover', border: '1px solid #bbb', display: 'block' }} />
            <div style={{ fontSize: 9, color: '#666', marginTop: 2 }}>写真：清掃活動の様子</div>
          </div>
        </div>

        {/* col1 article 3 */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, borderBottom: '1px solid #5a7a3a', marginBottom: 8, paddingBottom: 4 }}>児童課程　春の集い</div>
          <p style={{ fontSize: 11, lineHeight: 1.9, margin: 0 }}>
            3月下旬、児童課程の年間締めくくりとなる「春の集い」が開催されました。参加した子どもたちは今年度の学びを振り返りながら、それぞれの言葉で感想を述べました。
          </p>
          <p style={{ fontSize: 11, lineHeight: 1.9, marginTop: 8 }}>
            当日は保護者の方々もご参加くださり、終始温かな雰囲気のもとで進行しました。
          </p>
          {/* photo with key caption - broken */}
          <div style={{ border: '1px solid #bbb', height: 70, margin: '8px 0 4px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8f8f8', color: '#bbb', fontSize: 9 }}>
            画像を読み込めません
          </div>
          <div style={{ fontSize: 9, color: '#555', textAlign: 'center' }}>
            写真：集合写真（第3教育寮、2016年3月26日撮影）
          </div>
        </div>

        {/* col2 article 4 */}
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, borderBottom: '1px solid #5a7a3a', marginBottom: 8, paddingBottom: 4 }}>行事予定（2016年度）</div>
          <table style={{ width: '100%', fontSize: 10, borderCollapse: 'collapse' }}>
            {[
              ['4月', '新年度開講式、春期勉強会'],
              ['5月', '地域交流祭り参加'],
              ['6月', '児童課程　初夏のつどい'],
              ['8月', '夏期合宿（場所は別紙参照）'],
              ['10月', '秋期奉仕活動'],
              ['12月', '年次総会・懇親会'],
            ].map(([month, event]) => (
              <tr key={month} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={{ padding: '3px 6px', width: 40, color: '#5a7a3a', fontWeight: 700 }}>{month}</td>
                <td style={{ padding: '3px 6px' }}>{event}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #bbb', padding: '8px 20px', fontSize: 9, color: '#888', textAlign: 'center' }}>
        当会会報　第47号 ／ 編集：広報委員会 ／ 無断転載禁止
      </div>
    </div>
  );
}

/* ─────────────────── 2. dorm-3-public-record ─────────── */
function Dorm3PublicRecord(): JSX.Element {
  return (
    <div style={{ background: '#c0c0c0', fontFamily: '"MS Gothic", "Osaka", monospace', color: '#000', maxWidth: 760, minHeight: 500, padding: 8 }}>
      {/* fake browser chrome */}
      <div style={{ background: '#d4d0c8', border: '2px solid #808080', borderRadius: 0, padding: '4px 8px', marginBottom: 4, fontSize: 11, display: 'flex', gap: 8, alignItems: 'center' }}>
        <span style={{ background: '#d4d0c8', border: '1px solid #808080', padding: '1px 6px', fontSize: 10 }}>← →</span>
        <span style={{ flex: 1, background: '#fff', border: '1px inset #808080', padding: '1px 4px', fontSize: 10 }}>
          http://www.○○kai.or.jp/facilities/dorm3/public_record.html
        </span>
      </div>
      {/* page */}
      <div style={{ background: '#fff', padding: '20px 24px', border: '2px inset #808080' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td style={{ width: 80, verticalAlign: 'top', paddingRight: 16 }}>
                <div style={{ width: 70, height: 70, background: '#c0c0c0', border: '1px solid #808080', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: '#555' }}>
                  [logo]
                </div>
              </td>
              <td>
                <h1 style={{ margin: 0, fontSize: 20, color: '#000080' }}>第3教育寮　公開記録</h1>
                <hr style={{ borderTop: '2px solid #000080', margin: '6px 0' }} />
                <p style={{ fontSize: 11, margin: 0, color: '#444' }}>最終更新：2014年3月31日</p>
              </td>
            </tr>
          </tbody>
        </table>

        <p style={{ fontSize: 12, lineHeight: 1.8, marginTop: 16 }}>
          本ページは、第3教育寮に関する公開情報を掲載するものです。<br />
          施設概要、利用規則、年次報告の抄録を以下に示します。
        </p>

        <h2 style={{ fontSize: 14, color: '#000080', borderBottom: '1px solid #000080', paddingBottom: 2 }}>施設概要</h2>
        <table style={{ fontSize: 11, borderCollapse: 'collapse', width: '100%' }}>
          {[
            ['所在地', '非公開'],
            ['定員', '12名'],
            ['対象', '課程修了者（内部選定）'],
            ['管理責任者', '記載省略'],
          ].map(([k, v]) => (
            <tr key={k}>
              <td style={{ border: '1px solid #ccc', padding: '2px 8px', background: '#f0f0f0', width: 120 }}>{k}</td>
              <td style={{ border: '1px solid #ccc', padding: '2px 8px' }}>{v}</td>
            </tr>
          ))}
        </table>

        <h2 style={{ fontSize: 14, color: '#000080', borderBottom: '1px solid #000080', paddingBottom: 2, marginTop: 16 }}>年次報告（抄録）</h2>
        <p style={{ fontSize: 11, lineHeight: 1.8 }}>
          2013年度の年次報告については、施設内部の整備記録とあわせて別途管理されています。一般公開分の抄録は印刷配布のみとし、本ページへの掲載は省略します。
        </p>

        <h2 style={{ fontSize: 14, color: '#000080', borderBottom: '1px solid #000080', paddingBottom: 2, marginTop: 16 }}>写真記録（一部）</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
          {([
            { src: '/images/doc-dorm3-exterior.png', caption: '施設外観（2013年）' },
            { src: '/images/doc-dorm3-interior.png', caption: '居室内（記録用）' },
            { src: null, caption: '集合写真（2013年度）' },
            { src: null, caption: null },
            { src: null, caption: null },
          ] as { src: string | null; caption: string | null }[]).map(({ src, caption }, i) => (
            <div key={i} style={{ width: 110 }}>
              {src ? (
                <>
                  <img src={src} alt={caption ?? ''} style={{ width: 110, height: 80, objectFit: 'cover', border: '1px solid #aaa', display: 'block' }} />
                  <div style={{ fontSize: 9, color: '#555', marginTop: 2 }}>{caption}</div>
                </>
              ) : (
                <>
                  <div style={{ width: 110, height: 80, border: '1px solid #aaa', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: '#c00', background: '#fff8f8' }}>
                    画像を表示できません
                  </div>
                  <div style={{ fontSize: 9, color: '#999', marginTop: 2 }}>（読み込みエラー）</div>
                </>
              )}
            </div>
          ))}
        </div>
        <p style={{ fontSize: 10, color: '#666', marginTop: 12 }}>
          ※ 一部の画像ファイルは管理上の理由により非公開または削除済みです。
        </p>
        <hr style={{ marginTop: 20 }} />
        <p style={{ fontSize: 10, color: '#888', textAlign: 'center' }}>
          Copyright © ○○会　All rights reserved.　｜　<a href="#" style={{ color: '#000080' }}>プライバシーポリシー</a>　｜　<a href="#" style={{ color: '#000080' }}>お問い合わせ</a>
        </p>
      </div>
    </div>
  );
}

/* ─────────────────── 3. facility-report ─────────── */

function PhotoRecordLoss(): JSX.Element {
  const broken = (caption: string) => (
    <div style={{ width: 170, marginBottom: 16 }}>
      <div style={{ width: 170, height: 120, border: '2px inset #ccc', background: '#f8f8f8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 4 }}>
        <div style={{ fontSize: 28, color: '#ccc' }}>✕</div>
        <div style={{ fontSize: 9, color: '#bbb' }}>画像を読み込めません</div>
      </div>
      <div style={{ fontSize: 10, color: '#555', marginTop: 4, maxWidth: 170 }}>{caption}</div>
    </div>
  );

  return (
    <div style={{ background: '#c8c8c8', fontFamily: '"MS Gothic", monospace', maxWidth: 760, minHeight: 500, padding: 8 }}>
      <div style={{ background: '#d4d0c8', border: '2px solid #808080', padding: '3px 8px', marginBottom: 4, fontSize: 10 }}>
        http://www.○○kai.or.jp/archive/photos/dorm3/
      </div>
      <div style={{ background: '#fff', padding: '20px 24px', border: '2px inset #808080' }}>
        <h1 style={{ fontSize: 16, color: '#000080', margin: '0 0 4px' }}>写真記録　第3教育寮</h1>
        <p style={{ fontSize: 10, color: '#666', margin: '0 0 16px' }}>
          ※ このページの画像の一部は、サーバー移行の際に破損したため表示できません。
        </p>
        <hr />
        <h2 style={{ fontSize: 13, color: '#000080', margin: '12px 0 8px' }}>2013年度 活動記録</h2>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {broken('第3教育寮　外観（南側）')}
          {broken('居室内 2013年10月撮影')}
          {broken('集合写真（2013年度）')}
          {broken('第3教育寮児童課程　活動の様子')}
          {broken('夜間観察後　記録写真')}
          {broken('第3教育寮児童課程　2013年冬')}
        </div>
        <hr />
        <p style={{ fontSize: 10, color: '#888' }}>
          画像ファイルが存在しないか、アクセス権がありません。管理者にお問い合わせください。<br />
          （最終確認：2015年8月）
        </p>
      </div>
    </div>
  );
}

/* ─────────────────── 6. accident-hasegawa ─────────── */

function ProfileTonoRecord(): JSX.Element {
  return (
    <div style={{ background: '#fff', fontFamily: '"Hiragino Kaku Gothic ProN", "Meiryo", sans-serif', color: '#111', maxWidth: 760, minHeight: 500, padding: 0 }}>
      {/* old web header */}
      <div style={{ background: '#1a3a6a', color: '#fff', padding: '12px 20px', fontSize: 13 }}>
        当会　内部記録システム　／　個人記録閲覧
      </div>
      <div style={{ background: '#e8eef5', borderBottom: '1px solid #bcd', padding: '6px 20px', fontSize: 11, color: '#456' }}>
        記録 &gt; 対象者一覧 &gt; 遠野紗季
      </div>
      <div style={{ padding: '20px 24px' }}>
        <h1 style={{ fontSize: 18, borderBottom: '2px solid #1a3a6a', paddingBottom: 8, margin: '0 0 16px' }}>
          記録：遠野 紗季（とおの さき）
        </h1>
        <table style={{ fontSize: 11, borderCollapse: 'collapse', marginBottom: 20, width: '100%' }}>
          {[
            ['識別番号', '6-004'],
            ['性別', '女'],
            ['生年月日', '平成8年（1996年）3月26日'],
            ['入信日', '平成27年（2015年）10月9日'],
            ['課程', '第6教育寮　修了'],
            ['現状', '処置完了　（詳細は別添参照）'],
          ].map(([k, v]) => (
            <tr key={String(k)}>
              <td style={{ border: '1px solid #ccd', padding: '4px 10px', background: '#f0f4fa', width: 140, fontSize: 10 }}>{k}</td>
              <td style={{ border: '1px solid #ccd', padding: '4px 10px' }}>{v}</td>
            </tr>
          ))}
        </table>

        <h2 style={{ fontSize: 14, borderLeft: '3px solid #1a3a6a', paddingLeft: 8, margin: '20px 0 10px' }}>記録本文</h2>
        <div style={{ fontSize: 11, lineHeight: 2 }}>
          <p>入信時より従順な反応が見られ、課程中の逸脱記録は最小限に抑えられていた。対人場面での予測可能性は高水準で維持された。</p>
          <p>第6教育寮課程を経て、照合処理の対象となる。照合対象として記録されている別名義は{redact(80)}。照合ファイルにおける参照先は「榊原澄」との関連が示されており、別記対象照合表に詳細が記載されている。</p>
          <p>{redact(200)}</p>
          <p>渡航巡礼の対象として選定され、平成{redact(30)}年の出航記録に組み込まれた。現地側への引渡し完了。以後の経過は後続資料を参照。</p>
        </div>

        <div style={{ background: '#fff8e0', border: '1px solid #d4aa00', padding: '8px 12px', fontSize: 10, color: '#7a5500', marginTop: 16 }}>
          ⚠ この記録は閲覧制限が付与されています。アクセスログが記録されます。
        </div>
      </div>
    </div>
  );
}

/* ─────────────────── index ─────────── */

/* ─────────────────── index ─────────── */
const DOCS: Record<string, () => JSX.Element> = {
  'newsletter-2016-spring': NewsletterSpring2016,
  'dorm-3-public-record': Dorm3PublicRecord,
  'photo-record-loss': PhotoRecordLoss,
  'profile-tono-record': ProfileTonoRecord,
};

export const DOC_PREVIEW_SLUGS = Object.keys(DOCS);

export function DocPreviewPage(): JSX.Element {
  const { slug } = useParams<{ slug: string }>();
  const Component = DOCS[slug ?? ''];
  if (!Component) {
    return (
      <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
        <p>Not found: {slug}</p>
        <ul>
          {Object.keys(DOCS).map(s => <li key={s}><a href={`/doc-preview/${s}`}>{s}</a></li>)}
        </ul>
      </div>
    );
  }
  return <Component />;
}
