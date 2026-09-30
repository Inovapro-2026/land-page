export type ActiveTab = 'dashboard' | 'financeiro' | 'agenda' | 'prospect' | 'inbox' | 'campaigns' | 'clientes' | 'treinar-ia' | 'relatorios' | 'planos';

export interface PlanFeature {
  name: string;
  included: boolean;
  limit?: string;
}

export interface PlanItem {
  id: string;
  name: string;
  badge?: string;
  positioning: string;
  price: number;
  condition: string;
  highlighted?: boolean;
  limits: {
    leadsMonth: string;
    campaigns: string;
    users: string;
  };
  features: string[];
  ctaLabel: string;
}

export interface FinancialMetric {
  receitas: number;
  despesas: number;
  saldo: number;
  planejadoReceitas: number;
  planejadoDespesas: number;
  projecaoSaldo: number;
}

export interface FinancialEntry {
  id: string;
  descricao: string;
  categoria: string;
  valor: number;
  tipo: 'receita' | 'despesa';
  status: 'realizado' | 'planejado';
  data: string;
}

export interface AgendaEvent {
  id: string;
  hora: string;
  titulo: string;
  tipo: 'comercial' | 'followup' | 'atendimento' | 'prospeccao' | 'planejamento';
  participante: string;
  status: 'concluido' | 'em_andamento' | 'proximo';
}

export interface ProspectionLead {
  id: string;
  empresa: string;
  segmento: string;
  telefone: string;
  site: string;
  fonte: 'Firecrawl' | 'Overpass/OSM' | 'Apify' | 'Grupo WhatsApp' | 'Manual';
  status: 'Encontrada' | 'Enriquecida' | 'Qualificada' | 'No CRM';
  localidade: string;
}

export interface CRMContact {
  id: string;
  nome: string;
  empresa: string;
  etapa: 'novo_lead' | 'em_atendimento' | 'interessado' | 'negociacao' | 'cliente';
  valorEstimado?: number;
  intencao: 'Alta' | 'Média' | 'Informativa';
  canal: 'WhatsApp' | 'E-mail';
  modo: 'IA' | 'Humano';
  ultimaMensagem: string;
  hora: string;
  notasInternas?: string;
}

export interface TrainingMessage {
  id: string;
  autor: 'usuario' | 'ia';
  conteudo: string;
  chipsGerados?: Array<{
    tipo: 'Conhecimento' | 'Regra' | 'Contexto' | 'Preferência' | 'Objetivo';
    texto: string;
  }>;
}

export interface CampaignRecord {
  id: string;
  nome: string;
  canal: 'WhatsApp' | 'E-mail';
  status: 'Ativa' | 'Concluída' | 'Pausada';
  totalLeads: number;
  processados: number;
  respostas: number;
  interessados: number;
  taxaResposta: number;
}
