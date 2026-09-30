import { 
  FinancialMetric, 
  FinancialEntry, 
  AgendaEvent, 
  ProspectionLead, 
  CRMContact, 
  TrainingMessage, 
  CampaignRecord, 
  PlanItem 
} from '../types';

export const financialMetrics: FinancialMetric = {
  receitas: 18420,
  despesas: 7340,
  saldo: 11080,
  planejadoReceitas: 24500,
  planejadoDespesas: 8900,
  projecaoSaldo: 15600,
};

export const financialEntries: FinancialEntry[] = [
  {
    id: 'f-1',
    descricao: 'Contrato Mensalidade — Grupo Alfa',
    categoria: 'Receita Recorrente',
    valor: 4800,
    tipo: 'receita',
    status: 'realizado',
    data: 'Hoje, 10:15'
  },
  {
    id: 'f-2',
    descricao: 'Implantação Solução — Nexus Log',
    categoria: 'Serviços B2B',
    valor: 6200,
    tipo: 'receita',
    status: 'realizado',
    data: 'Ontem, 16:40'
  },
  {
    id: 'f-3',
    descricao: 'Infraestrutura Cloud & Servidores',
    categoria: 'Tecnologia',
    valor: 1420,
    tipo: 'despesa',
    status: 'realizado',
    data: '28 Set'
  },
  {
    id: 'f-4',
    descricao: 'Campanha de Tráfego & Prospecção',
    categoria: 'Marketing Comercial',
    valor: 2500,
    tipo: 'despesa',
    status: 'planejado',
    data: '05 Out'
  },
  {
    id: 'f-5',
    descricao: 'Renovação Trimestral — Zenith Tech',
    categoria: 'Receita Recorrente',
    valor: 7420,
    tipo: 'receita',
    status: 'planejado',
    data: '10 Out'
  }
];

export const agendaEvents: AgendaEvent[] = [
  {
    id: 'ag-1',
    hora: '09:00',
    titulo: 'Reunião comercial',
    tipo: 'comercial',
    participante: 'Diretor Comercial — Soluções Orion',
    status: 'concluido'
  },
  {
    id: 'ag-2',
    hora: '11:30',
    titulo: 'Follow-up de proposta',
    tipo: 'followup',
    participante: 'Carlos M. — TechLog Brasil',
    status: 'em_andamento'
  },
  {
    id: 'ag-3',
    hora: '14:00',
    titulo: 'Atendimento e demonstração',
    tipo: 'atendimento',
    participante: 'Mariana S. — Clínica Viver Bem',
    status: 'proximo'
  },
  {
    id: 'ag-4',
    hora: '16:30',
    titulo: 'Prospecção e qualificação',
    tipo: 'prospeccao',
    participante: 'Leads extraídos de Polo Industrial',
    status: 'proximo'
  },
  {
    id: 'ag-5',
    hora: '18:00',
    titulo: 'Planejamento semanal',
    tipo: 'planejamento',
    participante: 'Revisão de Metas & Pipeline SAVYRON',
    status: 'proximo'
  }
];

export const prospectionLeads: ProspectionLead[] = [
  {
    id: 'l-1',
    empresa: 'Apex Distribuidora Logística',
    segmento: 'Transporte & Cargas',
    telefone: '+55 11 98451-2290',
    site: 'apexlog.com.br',
    fonte: 'Firecrawl',
    status: 'Qualificada',
    localidade: 'São Paulo, SP'
  },
  {
    id: 'l-2',
    empresa: 'Kronos Automação Industrial',
    segmento: 'Engenharia & Equipamentos',
    telefone: '+55 19 97120-8831',
    site: 'kronosautomacao.ind.br',
    fonte: 'Overpass/OSM',
    status: 'No CRM',
    localidade: 'Campinas, SP'
  },
  {
    id: 'l-3',
    empresa: 'Vanguard Clínica Integrada',
    segmento: 'Saúde & Odonto',
    telefone: '+55 31 99204-1188',
    site: 'vanguardclinica.com.br',
    fonte: 'Apify',
    status: 'Qualificada',
    localidade: 'Belo Horizonte, MG'
  },
  {
    id: 'l-4',
    empresa: 'Grupo Empresarial Delta',
    segmento: 'Consultoria Contábil',
    telefone: '+55 41 98842-7019',
    site: 'deltagestao.com.br',
    fonte: 'Grupo WhatsApp',
    status: 'Enriquecida',
    localidade: 'Curitiba, PR'
  }
];

export const crmContacts: CRMContact[] = [
  {
    id: 'c-1',
    nome: 'Rodrigo Medeiros',
    empresa: 'Apex Logística',
    etapa: 'negociacao',
    valorEstimado: 4500,
    intencao: 'Alta',
    canal: 'WhatsApp',
    modo: 'IA',
    ultimaMensagem: 'Podemos fechar o plano anual com 2 usuários extras?',
    hora: '10:42',
    notasInternas: 'Decisor direto. Aguardando envio de link de pagamento.'
  },
  {
    id: 'c-2',
    nome: 'Juliana Costa',
    empresa: 'Inovare Odontologia',
    etapa: 'interessado',
    valorEstimado: 2800,
    intencao: 'Alta',
    canal: 'WhatsApp',
    modo: 'IA',
    ultimaMensagem: 'Gostei muito de como a IA responde. Quando iniciamos?',
    hora: '09:18',
    notasInternas: 'IA conduziu a conversa inicial com base no treinamento.'
  },
  {
    id: 'c-3',
    nome: 'Eduardo Silveira',
    empresa: 'Vanguard Engenharia',
    etapa: 'em_atendimento',
    valorEstimado: 3800,
    intencao: 'Média',
    canal: 'E-mail',
    modo: 'Humano',
    ultimaMensagem: 'Dúvida sobre integração com sistema legado de emissão de NF.',
    hora: '08:50',
    notasInternas: 'Takeover realizado pelo atendente humano para detalhes técnicos.'
  },
  {
    id: 'c-4',
    nome: 'Patrícia Prado',
    empresa: 'Studio Prado Interiores',
    etapa: 'novo_lead',
    valorEstimado: 1900,
    intencao: 'Informativa',
    canal: 'WhatsApp',
    modo: 'IA',
    ultimaMensagem: 'Gostaria de saber como funciona a extração de contatos.',
    hora: 'Ontem',
    notasInternas: 'Lead extraído de busca web local.'
  },
  {
    id: 'c-5',
    nome: 'Fernando Alencar',
    empresa: 'Alencar Equipamentos',
    etapa: 'cliente',
    valorEstimado: 5400,
    intencao: 'Alta',
    canal: 'WhatsApp',
    modo: 'IA',
    ultimaMensagem: 'Mensalidade quitada via Pix. Excelente suporte!',
    hora: '27 Set',
    notasInternas: 'Contrato ativo com renovação automática.'
  }
];

export const sampleTrainingConversation: TrainingMessage[] = [
  {
    id: 'tr-1',
    autor: 'usuario',
    conteudo: 'Quando o cliente perguntar sobre nosso plano profissional, explique que ele é indicado para empresas que querem organizar a prospecção e o atendimento.',
  },
  {
    id: 'tr-2',
    autor: 'ia',
    conteudo: 'Entendido. Registrei essa diretriz e vou contextualizar o plano profissional exatamente dessa forma nas próximas conversas.',
    chipsGerados: [
      { tipo: 'Conhecimento', texto: 'Plano Profissional: foco em prospecção & atendimento' },
      { tipo: 'Regra', texto: 'Explicar perfil ideal antes de falar valor' }
    ]
  },
  {
    id: 'tr-3',
    autor: 'usuario',
    conteudo: 'Se o cliente estiver com dúvida sobre preço, não pressione. Explique primeiro o benefício prático de centralizar a operação.',
  },
  {
    id: 'tr-4',
    autor: 'ia',
    conteudo: 'Compreendido perfeitamente. Nas objeções de valor financeiro, a prioridade será demonstrar o ganho de tempo e organização antes de qualquer tentativa de fechamento.',
    chipsGerados: [
      { tipo: 'Contexto', texto: 'Posicionamento consultivo e não agressivo' },
      { tipo: 'Preferência', texto: 'Tom respeitoso, objetivo e focado em benefícios' },
      { tipo: 'Objetivo', texto: 'Demonstrar retorno operacional em vez de desconto' }
    ]
  }
];

export const campaignSample: CampaignRecord = {
  id: 'cmp-01',
  nome: 'Prospecção Setembro',
  canal: 'WhatsApp',
  status: 'Ativa',
  totalLeads: 1250,
  processados: 425, // 34%
  respostas: 87,
  interessados: 21,
  taxaResposta: 20.5
};

export const plansData: PlanItem[] = [
  {
    id: 'starter',
    name: 'Starter',
    positioning: 'Para autônomos e pequenos negócios que precisam organizar contatos, finanças e agenda em um só lugar.',
    price: 127,
    condition: 'Sem fidelidade contratual',
    limits: {
      leadsMonth: '500 leads/mês',
      campaigns: '3 campanhas ativas',
      users: '1 usuário'
    },
    features: [
      'Dashboard operacional integrado',
      'Financeiro com receitas e despesas',
      'Agenda e compromissos comerciais',
      'CRM básico com funil de vendas',
      'Prospecção web inteligente',
      'Inbox unificado com histórico',
      'Treinamento da IA por chat básico',
      'Suporte via plataforma'
    ],
    ctaLabel: 'Começar com Starter'
  },
  {
    id: 'profissional',
    name: 'Profissional',
    badge: 'Mais Escolhido',
    positioning: 'Ideal para empresas em crescimento que desejam automatizar prospecção, atendimento com IA e controle financeiro completo.',
    price: 247,
    condition: 'Sem fidelidade contratual',
    highlighted: true,
    limits: {
      leadsMonth: '2.500 leads/mês',
      campaigns: 'Ilimitadas',
      users: 'Até 5 usuários'
    },
    features: [
      'Tudo do plano Starter',
      'Extração de contatos de Grupos do WhatsApp',
      'Atendimento automatizado por IA 24/7',
      'Transição suave para atendente humano (Handoff)',
      'Follow-up inteligente programado',
      'Campanhas multicanal automatizadas',
      'Projeção financeira e categorias avançadas',
      'Relatórios analíticos de conversão',
      'Memória contínua da IA para a empresa',
      'Suporte prioritário'
    ],
    ctaLabel: 'Escolher Profissional'
  },
  {
    id: 'escala',
    name: 'Escala',
    badge: 'Máxima Performance',
    positioning: 'Para operações comerciais estruturadas com equipes de vendas, alto volume de prospecção e múltiplos canais.',
    price: 497,
    condition: 'Sem fidelidade contratual',
    limits: {
      leadsMonth: '10.000+ leads/mês',
      campaigns: 'Ilimitadas com alta vazão',
      users: 'Usuários ilimitados'
    },
    features: [
      'Tudo do plano Profissional',
      'Múltiplas instâncias de WhatsApp conectadas',
      'Treinamento de IA avançado com regras complexas',
      'Permissões por equipe e controle de acessos',
      'Relatórios executivos e auditoria de mensagens',
      'Integrações personalizadas via Webhook / API',
      'Gateways flexíveis (Stripe, Cakto, AbacatePay)',
      'Gerente de conta dedicado e onboarding guiado'
    ],
    ctaLabel: 'Contratar Escala'
  }
];

export const operationalNodes = [
  { id: 'dinheiro', label: 'Dinheiro', desc: 'Receitas, despesas e projeções', icon: 'DollarSign', color: 'from-emerald-500 to-cyan-500' },
  { id: 'tempo', label: 'Tempo', desc: 'Agenda, tarefas e compromissos', icon: 'Clock', color: 'from-blue-500 to-indigo-500' },
  { id: 'clientes', label: 'Clientes', desc: 'CRM, funil e histórico unificado', icon: 'Users', color: 'from-cyan-500 to-blue-600' },
  { id: 'prospeccao', label: 'Prospecção', desc: 'Busca web e extração de leads', icon: 'Compass', color: 'from-sky-400 to-blue-500' },
  { id: 'atendimento', label: 'Atendimento', desc: 'IA 24/7 com handoff para humano', icon: 'MessageSquare', color: 'from-teal-400 to-cyan-600' },
  { id: 'ia', label: 'IA Treinada', desc: 'Memória e regras do seu negócio', icon: 'Sparkles', color: 'from-violet-500 to-indigo-500' },
  { id: 'campanhas', label: 'Campanhas', desc: 'WhatsApp e E-mail integrados', icon: 'Send', color: 'from-blue-600 to-cyan-400' },
  { id: 'relatorios', label: 'Relatórios', desc: 'Conversão, interesse e métricas', icon: 'BarChart3', color: 'from-indigo-400 to-sky-500' }
];

export const rotatingCardsData = [
  {
    id: 1,
    title: 'Organize seu dinheiro',
    desc: 'Controle entradas, saídas, pendências e saiba exatamente o que está previsto para o mês.',
    category: 'Financeiro',
    metric: 'R$ 18.420 / mês',
    submetric: 'R$ 11.080 saldo líquido'
  },
  {
    id: 2,
    title: 'Organize seu tempo',
    desc: 'Compromissos, follow-ups de vendas e lembretes em uma timeline que não deixa nada passar.',
    category: 'Agenda',
    metric: '5 compromissos hoje',
    submetric: 'Próximo em 45 min'
  },
  {
    id: 3,
    title: 'Encontre clientes',
    desc: 'Localize empresas na web com telefone, site e localidade para abastecer seu funil.',
    category: 'Prospecção',
    metric: '127 leads identificados',
    submetric: 'Via Firecrawl & OSM'
  },
  {
    id: 4,
    title: 'Atenda automaticamente',
    desc: 'A IA responde dúvidas, qualifica o interesse e passa para sua equipe no momento certo.',
    category: 'Atendimento',
    metric: '94% tempo de resposta < 10s',
    submetric: 'Handoff humano em 1 clique'
  },
  {
    id: 5,
    title: 'Treine sua IA',
    desc: 'Explique sua empresa conversando. A IA internaliza regras de preço, conduta e produtos.',
    category: 'Inteligência',
    metric: 'Base estruturada ativa',
    submetric: 'Memória persistente'
  },
  {
    id: 6,
    title: 'Controle seus leads',
    desc: 'Histórico de conversas, intenção de compra, notas da equipe e movimentação no funil.',
    category: 'CRM',
    metric: '42 negócios no pipeline',
    submetric: 'Etapas bem definidas'
  },
  {
    id: 7,
    title: 'Crie campanhas',
    desc: 'Dispare sequências no WhatsApp e E-mail respeitando intervalos e monitorando respostas.',
    category: 'Campanhas',
    metric: '34% taxa de abertura',
    submetric: 'Multicanal unificado'
  },
  {
    id: 8,
    title: 'Veja seus resultados',
    desc: 'Gráficos limpos de conversão, opt-out, taxa de resposta e faturamento realizado.',
    category: 'Relatórios',
    metric: '20.5% taxa de resposta',
    submetric: 'Visão executiva em tempo real'
  }
];
