import React, { Component } from 'react'
import { Button, Col, Row, Divider, Anchor, Affix, Icon, } from 'antd'
import { Parallax, Background } from 'react-parallax';
import '../../App.css';

const { Link } = Anchor;


const pageContents = {
    aboutus: {
        title: "Hakkında",
        content: <div className="text-google-font mt-most" style={{ fontSize: "18px",marginBottom:20 }}>
            <section id="aktivity-nedir">
            <strong className="mt-most fw-500">
                AKTIVITY NEDİR?
            </strong>
            <Divider />
            Türkiye pazarında,insanların eğlence,etkinlik,diğer tanıdıkları/tanımadıkları insanlar ile gerçek hayatta sosyalleşmesini ve yine dilediği gibi özgür şekilde,kendi tercihleri doğrultusunda yapmak istediği etkinliklerde bulunmasını hedefleyen bir online mobil-web platformdur.
            Bu platformu geliştirirken kullanıcılarımızın herhangi bir bireyin,kurumun ya da kurumsal kimliğin baskısı altında kalmadan aktivity'leri sonucunda oylamaları ve yorumlarına özen gösterip,bunu feedback ile bizlere bildirmesini sağladık.
            </section>
          <br/>
          <br/>
          <br/>
            <section id="nasil-calisir">
            <strong className="mt-most fw-500">
                AKTIVITY NASIL ÇALIŞIR?
            </strong>
            <Divider />
            <strong>Bireysel kullanıcılarımız</strong> , dilediği kategoride,dilediği yerde kendi etkinliklerini düzenleyebilir,AKTIVITY'deki kullanıcılara sunabilir ve onların katılmasını sağlayabilir.
            <br />
            <strong>Kurumsal kullanıcılarımız</strong> , faaliyet gösterdikleri alanda etkinlikler ücretli/ücretsiz etkinlikler düzenleyebilir.Bireysel AKTIVITY kullanıcılarımıza sunabilir.
         
            </section>
          <br/>
          <br/>
          <br/>
           <section id="aktivitylere-katilmadan-once">
           <strong className="mt-most fw-500">
                AKTIVITY'LERE KATILMADAN ÖNCE
            </strong>
            <Divider />
            AKTIVITY platformu, <u>'tüm üyelerimizin özgürlüğü ve kendi özgür iradeleri ile diledikleri etkinlikleri yapabilmesi'</u> amacıyla hizmet veren bir platform olduğu için tüm üyelerin etkinlikeler sonunda değerlendirilmeleri amacıyla <strong>Güven</strong>,<strong>Samimiyet</strong>,<strong>Güleryüzlü</strong> faktörlerini kriter belirleyip değerlendirme sistemi ile hazırlanmıştır.
            Bu değerlendirme sonucunda her üyemizin <strong>GENEL DEĞERLENDİRME</strong> puanı mevcuttur.
            Bu GD puanı <strong className="color-danger"> <Icon type="arrow-down" /> 50 ve daha az</strong> olan tüm üyelerin düzenledikleri etkinliklere <strong>katılmamalarını </strong>
            tavsiye eder.<strong className="color-success"><Icon type="arrow-up" /> 50 ve daha üzeri</strong> GD puanına sahip olan üyelerimize şans veriniz.Ve yine onların da genel değerlendirme sayfalarını inceleyiniz.
            
           </section>
           <br/>
           <br/>
           <br/>
            <section id="daha-fazla-bilgi" style={{marginBottom:100}}>
                
                    <strong className="mt-most fw-500">
                        DAHA FAZLA BİLGİ ALMAK İSTİYORUM
                </strong>
                    <Divider />
                    Merak ettikleriniz için <a href="#">AKTIVITY BÜYÜYOR</a> sayfasını inceleyiniz.Platformun doğup-büyümesi evrelerini buradan daha detaylı inceleyebilirsiniz.
                    <br />
                    <strong>Kurumsal iletişimler için </strong> <a href="mailto:corporate@pretechlabs.com">corporate@pretechlabs.com</a> üzerinden bilgi alabilirsiniz.
                 </section>
        </div>,
        direction: <Anchor style={{marginLeft:20,marginTop:20}}>
            <Link href="#aktivity-nedir" title="Aktivity Nedir?" />
            <Link href="#nasil-calisir" title="Aktivity Nasıl Çalışır?" />
            <Link href="#aktivitylere-katilmadan-once" title="Aktivity'lere Katılmadan Önce" />
            <Link href="#daha-fazla-bilgi" title="Daha Fazla Bilgi Almak İstiyorum" />
            
        </Anchor>
    },
    privacy:{
        title:"Gizlilik Politikası",
        content:<h2>"Gizlilik politikası içerik"</h2>,
        direction:<div>A</div>
    },
    cookies:{
        title:"Çerezlerin Kullanımı",
        content:<h2>Çerezlerin Kullanımı</h2>,
        direction:<div>A</div>
    },
    advertisement:{
        title:"Reklam ve işletme",
        content:<h2>Reklam ve işletme</h2>,
        direction:<div>A</div>
    },
    contact:{
        title:"İletişim",
        content:<h2>İletişim</h2>,
        direction:<div>A</div>
    },
    tos:{
        title:"Hizmet Şartları",
        content:<h2>Hizmet Şartları</h2>,
        direction:<div>Hizmet Şartları</div>
    },
    index:{
        title:"Bilgi Edinme Merkezi",
        content:<div className="text-google-font mt-most"> 
            <div className="ml-most information-box w-100 h-100 mt-most" style={{borderRadius:10,cursor:"pointer",alignContent:"center",textAlign:"center",paddingTop:"50px"}}>
            <Icon className="text-google-font" type="info-circle" />
            <h3>Hakkında</h3>
            </div>
            <div className="ml-most information-box w-100 h-100 mt-most" style={{borderRadius:10,cursor:"pointer",alignContent:"center",textAlign:"center",paddingTop:"50px"}}>
            <Icon type="safety-certificate" />
            <h3>Gizlilik Politikası</h3>
            </div>
            <div className="ml-most information-box w-100 h-100 mt-most" style={{borderRadius:10,cursor:"pointer",alignContent:"center",textAlign:"center",paddingTop:"50px"}}>
            <Icon type="security-scan" />
            <h3>Çerezler</h3>
            </div>
            <div className="ml-most information-box w-100 h-100 mt-most" style={{borderRadius:10,cursor:"pointer",alignContent:"center",textAlign:"center",paddingTop:"50px"}}>
            <Icon type="bank" />
            <h3>Reklam ve İşletme</h3>
            </div>
        </div>
    }
}
class information_layout extends Component {
    componentDidMount(){
        const { params } = this.props.match;
        params.id == 'aboutus' && (document.title=pageContents.aboutus.title)
        params.id=='privacy'&&(document.title=pageContents.privacy.title);
        params.id=='cookies'&&(document.title=pageContents.cookies.title);
        params.id=='tos'&&(document.title=pageContents.tos.title);
        params.id=='advertisement'&&(document.title=pageContents.advertisement.title);
        params.id=='contact'&&(document.title=pageContents.contact.title);
    }
    render() {
        const { params } = this.props.match
        return (
            <div>
                <Row>

                    <Col span={24}>
                    <Button type="dashed" icon="container" shape="round" className="information-direction-btns">
                                Bilgi Edinme Sayfası
                    </Button>
                         <div className="information-header text-google-font">
                             
                                {
                                    params.id == 'aboutus' && (pageContents.aboutus.title)
                                }
                                {
                                    params.id=='privacy'&&(pageContents.privacy.title)
                                }
                                {
                                    params.id=='cookies'&&(pageContents.cookies.title)
                                }
                                {
                                    params.id=='tos'&&(pageContents.tos.title)
                                }
                                {
                                    params.id=='advertisement'&&(pageContents.advertisement.title)
                                }
                                {
                                    params.id=='contact'&&(pageContents.contact.title)
                                }
                                {
                                    params.id=="index"&&(
                                        pageContents.index.title
                                    )
                                }

                            
                           
                            </div>
                    </Col>
                    <Col span={4}>
                        <Affix offsetTop={0}>
                            {
                                params.id == 'aboutus' && (pageContents.aboutus.direction)
                            }
                            {
                                    params.id=='privacy'&&(pageContents.privacy.direction)
                            }
                        </Affix>
                    </Col>
                    <Col span={20} style={{ paddingLeft: 200, paddingRight: 200 }}>
                         {
                                    params.id=="index"&&(
                                        pageContents.index.content
                                    )
                                }
                        {
                            params.id == 'aboutus' && (pageContents.aboutus.content)
                        }
                         {
                            params.id == 'privacy' && (pageContents.privacy.content)
                        }
                    </Col>
                </Row>
            </div>
        )
    }
}
export default information_layout;