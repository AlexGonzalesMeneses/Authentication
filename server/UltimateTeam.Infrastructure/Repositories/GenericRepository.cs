using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using UltimateTeam.Domain.Contracts.Repositories;
using UltimateTeam.Infrastructure.DataManagers;

namespace UltimateTeam.Infrastructure.Repositories
{
    public class GenericRepository<T> : IRepository<T> where T : class
    {
        protected readonly ContextDB context;
        protected DbSet<T> entities;

        public GenericRepository(ContextDB context)
        {
            this.context = context;
            entities = context.Set<T>();
        }

        public T Add(T entity)
        {
            context.Set<T>().Add(entity);
            context.SaveChanges();

            return entity;
        }

        public T Delete(T entity)
        {
            context.Set<T>().Remove(entity);
            context.SaveChanges();

            return entity;
        }

        public IEnumerable<T> GetAll()
        {
            return entities.AsEnumerable();
        }

        public T GetById(Guid id)
        {
            return entities.Find(id);
        }

        public T Update(T entity)
        {
            context.Entry(entity).State = EntityState.Modified;
            context.SaveChanges();

            return entity;
        }
    }
}