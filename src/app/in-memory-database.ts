import { InMemoryDbService } from "angular-in-memory-web-api";
import { Category } from "./pages/categories/shared/category.model";
export class InMemoryDatabase implements InMemoryDbService {
  createDb(){
    const categories = Category[] =[
      { id: 1, name: 'Moradia', description: 'Pagamentos de contas da casa'},
      { id: 2, name: 'Saúde', description: 'Plano de Saúde ou farmácia'},
      { id: 3, name: 'Comida', description: 'Esfiha, Pizza e etc'},
      { id: 3, name: 'Lazer', description: 'Cremes, Avon, Natura e etc'},
      { id: 4, name: 'Salários', description: 'REcebimento de salário'},
      { id: 5, name: 'Freelas', description: 'Trabalhos como freelancer'}
    ];

    return { categories }
  }
}
