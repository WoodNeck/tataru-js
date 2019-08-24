const Josa = require('josa-js');
const dedent = require('@/utils/dedent');
const { strong } = require('@/utils/markdown');
const EMOJI = require('@/constants/emoji');


module.exports = {
	DICE: {
		CMD: '주사위',
		DESC: 'n면짜리 주사위를 굴린다냥! (기본값: 100)',
		USAGE: '[n]',
		MIN: 2,
		MAX: 10000,
		DEFAULT: 100,
		MSG: (user, num, maxNum) => {
			// Korean josa for number 0-9
			const josa = ['이', '이', '가', '이', '가', '가', '이', '이', '이', '가'];
			const numStr = num.toString();
			return `${user.toString()}냥이 주사위를 굴려 🎲${strong(numStr)}${josa[num % 10]} 나왔다냥! (1-${maxNum})`;
		},
	},
	CHOOSE: {
		CMD: '골라줘',
		DESC: '받은 항목들 중 하나를 임의로 골라준다냥!',
		USAGE: '항목1 항목2 [항목3...]',
	},
	SAY: {
		CMD: '따라해',
		DESC: '해준 말을 지운 후에 따라한다냥!',
		USAGE: '따라할 문장',
		TARGET: '따라할 문장',
	},
	VOTE: {
		CMD: '투표',
		DESC: '채널 내에서 간단한 투표를 할 수 있다냥!',
		USAGE: '제목',
		TARGET: '투표 제목',
		CONVERSATION_TIME: 120,
		OPTIONS_TITLE: '투표 항목들을 말해달라냥!',
		OPTIONS_DESC: '콤마(,)로 항목들을 구분해서, 최소 2개에서 9개까지 투표 항목들을 말해달라냥!',
		OPTIONS_FOOTER: '예) 옵션1, 옵션2, 옵션3',
		DURATION_TITLE: '투표를 몇 분동안 하면 될까냥?',
		DURATION_DESC: dedent`
			투표를 종료하기까지 시간을 분 단위로 말해달라냥!
			최소 1분에서 최대 1440분(하루)까지 가능하다냥!`,
		DURATION_FOOTER: '예) 30',
		DURATION_MAX: 1440,
		HELP_DESC: dedent`
			투표를 시작한다냥! 번호 이모지를 클릭해서 투표하라냥!
			각자 가장 마지막에 클릭한 이모지가 최종 투표 항목이 된다냥!`,
		RESULT_DESC: (name, votes) => dedent`
			투표 결과가 나왔다냥!
			${strong(name)}${Josa.c(name, '이/가')} ${strong(votes)}표로 가장 높은 표를 기록했다냥!`,
		TITLE: title => `${EMOJI.THINKING} ${title}`,
		AUTHOR: name => `${name}의 투표`,
		COUNT: cnt => `${cnt}표`,
	},
	AVATAR: {
		CMD: '아바타',
		DESC: '사용자의 아바타 이미지를 크게 보여준다냥!',
		USAGE: '@사용자',
	},
	REPLY: {
		CMD: '답변',
		DESC: '답변을 보낸다냥!',
		USAGE: '길드_아이디/채널_아이디 메시지',
		PROMPT_TIME: 60,
	},
	RANDOM_TEAM: {
		CMD: '랜덤팀',
		DESC: '지원자들을 랜덤하게 n개의 팀으로 나눠준다냥!',
		USAGE: '파티명(optional)',
		COLLECT_TITLE: partyName => partyName ? `"${partyName.replace('\n', '')}" 파티를 모집한다냥!` : '파티를 모집한다냥!',
		COLLECT_DESC: dedent`
			파티에 참가하려면 ${EMOJI.RAISED_HAND} 버튼을 눌러달라냥!
			파티 생성자는 ${EMOJI.GREEN_CHECK} 버튼을 눌러 파티원 모집을 마감할 수 있다냥!
			파티원 모집은 최대 한시간 동안 이루어진다냥!`,
		COLLECT_FOOTER: num => `현재 참여인원: ${num}명`,
		COLLECT_TIME: 60,
		MAX_TEAM_TITLE: num => `총 ${num}명의 파티원이 모였다냥! 파티원들을 몇 팀으로 나눌거냥?`,
		MAX_TEAM_DESC: max => `숫자를 하나 말해달라냥! (최대 ${max}팀까지 나눌 수 있다냥!)`,
		MAX_TEAM_TIME: 10,
		RESULT_TITLE: partyName => partyName ? `"${partyName.replace('\n', '')}" 파티의 팀나누기 결과다냥!` : '팀나누기 결과다냥!',
		RESULT_FOOTER: `${EMOJI.CROWN}이 붙은 사람이 팀장이다냥!`,
		RESULT_FIELD_TITLE: index => `${EMOJI.SMALL_BLUE_DIAMOND} 팀 ${index + 1}`,
	},
};
