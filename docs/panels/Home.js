import React from 'react';
import connect from '@vkontakte/vk-connect';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';

connect.subscribe((e) => console.log(e));

<script src="dist/index.umd.js"></script>
 
<script>
  // Sends event to client
  vkConnect.send('VKWebAppInit');
</script> 

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Мосэнергосбыт — оплата электроэнергии</PanelHeader>
		{fetchedUser &&
		<Group title="User Data Fetched with VK Connect">
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<br /><center><img src="http://pay.mosenergosbyt.ru/oplata/images/logo-new.png" width="320"/></center>
		
		
		<center><h1 style={{ color: 'black' }}>Оплата электроэнергии банковской картой</h1></center>
		Комиссионное вознаграждение за проведение платежа со счета банковской карты не взимается<br /><br /> 
		К оплате принимаются карты национальной платежной системы "Мир", а также карты международных платежных систем VISA и MasterCard, 
		эмитированные в рублях РФ кредитными организациями, расположенными на территории России.<br /><br />

Обязательными реквизитами, необходимыми для совершения платежа, являются:<br /><br />
- 10 (Десяти) значный номер лицевого счета, указанный в счете на оплату электроэнергии;<br /><br />
- период оплаты, за который осуществляется платеж;<br /><br /> 
- адрес электронной почты плательщика, предназначенный для отправки 
результата платежа и кассового чека в соответствии с требованием Федерального закона от 22.05.2003 
N 54-ФЗ «О применении контрольно-кассовой техники при осуществлении расчетов в Российской Федерации<br /><br />

В период с 15 по 26 число календарного месяца при выборе способа платежа "Оплатить по показаниям" 
реализована функция передачи текущих показаний приборов учета, перерасчет суммы баланса и оплата счета, 
с учетом переданных показаний, на одной платежной странице.<br /><br />

Максимальная сумма платежа не может превышать 50000.00 руб<br /><br />

Информация о совершенном платеже передается в режиме реального времени и отражается в "Личном кабинете клиента" 
в разделе "Состояние счета" - "История платежей за э / э" с признаком "Обрабатывается"<br /><br />

При зачислении денежных средств на лицевой счет клиента платежу присваивается признак "Зачислен".<br /><br />

Срок зачисления платежа от 3 до 5 дней
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik">
					ОПЛАТИТЬ
				</Button>
			</Div>
		
	</Panel>

);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
