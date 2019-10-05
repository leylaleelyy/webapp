import React, { Component ,Fragment} from "react";
import './passage.css';
export default class Passage extends Component {
    render() {
        return (
            <Fragment>
                <header className='passage-header'>
                    <div className='img-back'
                         onClick={()=>{window.location.href="/"}} >
                             </div>
                    <span className='page-title'>订阅号消息</span>
                </header>
                <div className='always'>
                    <div>常读的订阅号</div>
                    <div className="menu">
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                        <div className="item"></div>
                    </div>
                </div>
                <section className="block" >
                    <input type="checkbox" />
                        <div className="case-block">
                            <div>展开</div>
                            <div>收起</div>
                        </div>
                        <div className="detail">
                            <div className='detail-img'>

                            </div>
                            <div>东市买骏马，西市买鞍鞯，南市买辔头，北市买长鞭。旦辞爷娘去，暮宿黄河边，不闻爷娘唤女声，但闻黄河流水鸣溅溅。旦辞黄河去，暮至黑山头，不闻爷娘唤女声，但闻燕山胡骑鸣啾啾。</div>
                            <div>万里赴戎机，关山度若飞。朔气传金柝，寒光照铁衣。将军百战死，壮士十年归。</div>
                            <div>归来见天子，天子坐明堂。策勋十二转，赏赐百千强。可汗问所欲，木兰不用尚书郎，愿驰千里足，送儿还故乡。(一作：愿借明驼千里足)</div>
                            <div>爷娘闻女来，出郭相扶将；阿姊闻妹来，当户理红妆；小弟闻姊来，磨刀霍霍向猪羊。开我东阁门，坐我西阁床，脱我战时袍，著我旧时裳。当窗理云鬓，对镜帖花黄。出门看火伴，火伴皆惊忙：同行十二年，不知木兰是女郎。（帖
                                通：贴；惊忙一作：惶；惶 火伴 通：伙）
                            </div>
                            <div>雄兔脚扑朔，雌兔眼迷离；双兔傍地走，安能辨我是雄雌？</div>
                        </div>
                </section>
            </Fragment>
        )
    }
}
